import { RevokeApiData } from "@/types/api"

export async function revokeApiKey(){
    const res = await fetch('/api/api-key/revoke',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
    })

    const data=(await res.json()) as RevokeApiData

    if(data.error){
        throw new Error("Something went wrong")
    }
}

