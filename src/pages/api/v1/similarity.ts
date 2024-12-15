import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { HfInference } from '@huggingface/inference'
import dotProduct from "@/helpers/dotProduct";
import { withMethods } from "@/lib/api-middlewares/with-methods";

const reqSchema = z.object({
    text1:z.string().max(1000),
    text2:z.string().max(1000)
})

const handler = async (req:NextApiRequest,res:NextApiResponse)=>{
    const body = req.body as unknown
    const apiKey = req.headers.authorization
    if(!apiKey){
        return res.status(401).json({error:'Unauthorized'})
    }

    try{
        const {text1,text2}=reqSchema.parse(body)
        const validApiKey = await db.apiKey.findFirst({
            where:{key:apiKey,enabled:true}
        })
        if(!validApiKey){
            return res.status(401).json({error:'Unauthorized'})
        }

        const start = new Date()

        const hf = new HfInference(process.env.HF_API_KEY)
        const output1=await hf.featureExtraction({
            model: "ggrn/e5-small-v2",
            inputs: text1,
          });
        const output2=await hf.featureExtraction({
            model: "ggrn/e5-small-v2",
            inputs: text2,
          });
        
        const similarity=dotProduct(output1,output2);
        const duration = new Date().getTime()-start.getTime()

         await db.apiRequest.create({
            data:{
                duration,
                method:req.method as string,
                path:req.url as string,
                status:200,
                apiKeyId:validApiKey.id,
                usedApiKey:validApiKey.key
            }
         })

         return res.status(200).json({success:true,text1,text2,similarity})
    }catch(error){
        if(error instanceof z.ZodError){
            return res.status(400).json({error:error.issues})
        }
        return res.status(500).json({error:'Internal Server Error'})
    }
}

export default withMethods(['POST'],handler)