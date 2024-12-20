import ApiDashboard from "@/components/ApiDashboard"
import RequestApiKey from "@/components/RequestApiKey"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { notFound } from "next/navigation"

export const metadata:Metadata={
    title:'APITEXTCHECK | Dashboard',
    description:'Free Similarity api'
}

const page=async()=>{
    const user = await getServerSession(authOptions)
    if(!user) return notFound()

    const apiKey = await db.apiKey.findFirst({
        where:{userId:user.user.id,enabled:true}
    })
    return(
        <div className="max-w-7xl mx-auto mt-16">
            {apiKey?<ApiDashboard/>:<RequestApiKey/>}
        </div>
    )
}
export default page