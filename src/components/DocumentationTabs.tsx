import { FC } from "react";
import { Tabs,TabsList,TabsTrigger,TabsContent } from "./ui/Tabs";
import Code from "./Code";
import { nodejs
 } from "@/helpers/documentation-code";
 import { python } from "@/helpers/documentation-code";

export const DocumentationTabs: FC=()=>{
    return(
        <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
            <TabsList>
                <TabsTrigger value='nodejs'>NodeJs</TabsTrigger>
                <TabsTrigger value='python'>Python</TabsTrigger>
            </TabsList>
            <TabsContent value='nodejs'>
                <Code code={nodejs} show={true} language="javascript" animated={true}/>
            </TabsContent>
            <TabsContent value='python'>
            <Code code={python} show={true} language="python" animated={true}/>
            </TabsContent>
        </Tabs>
    )
}