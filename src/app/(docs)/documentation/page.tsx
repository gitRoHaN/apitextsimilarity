import {FC} from 'react'
import type { Metadata } from 'next'
import LargeHeading from '@/components/ui/largeHeading'
import Paragraph from '@/components/ui/paragraph'
import 'simplebar-react/dist/simplebar.min.css'
import { DocumentationTabs } from '@/components/DocumentationTabs'

export const metadata:Metadata={
    title:'API TextCheck | Documentation',
    description:'Free text similarity API'
}

const page:FC=()=>{
    return(
        <div className='container max-w-7xl mx-auto mt-12'>
            <div className='flex flex-col items-center gap-6'>
                <LargeHeading>Making a request</LargeHeading>
                <Paragraph>api/v1/similarity</Paragraph>
                <DocumentationTabs/>
            </div>
        </div>
    )
}

export default page