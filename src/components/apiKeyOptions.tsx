'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/DropdownMenu";
import { FC, useState } from "react";
import { DropdownMenuTrigger } from "./ui/DropdownMenu";
import Button from "./ui/Button";
import { Loader2 } from "lucide-react";
import { toast } from "./ui/Toast";
import { createApiKey } from "@/helpers/create-api-key";
import { useRouter } from "next/navigation"
import { revokeApiKey } from "@/helpers/revoke-api-keys";

interface ApiKeyOptionsProps{
    apiKeyId:string,
    apiKeyKey:string
}

const ApiKeyOptions:FC<ApiKeyOptionsProps>=({apiKeyId,apiKeyKey})=>{
    const [isCreatingNew,setIsCreatingNew]=useState<boolean>(false)
    const [isRevoking,setIsRevoking]=useState<boolean>(false)
    const router = useRouter()

    const createNewApiKey=async()=>{
        setIsCreatingNew(true)
        try{
            await revokeApiKey()
            await createApiKey()
            router.refresh()
        }catch(error){
            toast({
                title:'Error creating API key',
                message:'Please try again later.',
                type:'error'
            })
        } finally{
            setIsCreatingNew(false)
        }
    }
    const revokeCurrentApiKey=async()=>{
        setIsRevoking(true)
        try{
            await revokeApiKey()
            router.refresh()
        }catch(error){
            toast({
                title:'Error revoking API key',
                message:'Please try again later.',
                type:'error'
            })
        } finally{
            setIsRevoking(false)
        }
    }

    return(
        <DropdownMenu>
            <DropdownMenuTrigger disabled={isCreatingNew||isRevoking} asChild>
                <Button variant='ghost' className="flex gap-2 items-center">
                    <p>{isCreatingNew?'Creating new key':isRevoking?'Revoking key':'Options'}</p>
                    {isCreatingNew||isRevoking?(
                        <Loader2/>
                    ):null}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={()=>{navigator.clipboard.writeText(apiKeyKey)
                toast({
                    title:'Copied',
                    message:'Api key copied to clipboard',
                    type:'success'
                })
                }}>
                    Copy
                </DropdownMenuItem>
                <DropdownMenuItem onClick={createNewApiKey}>
                    Create new key
                </DropdownMenuItem>
                <DropdownMenuItem onClick={revokeCurrentApiKey}>
                    Revoke key
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default ApiKeyOptions