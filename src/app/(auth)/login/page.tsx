import { buttonVariants } from "@/components/ui/Button"
import Link from "next/link"
import { Icons } from "@/components/Icons"
import LargeHeading from "@/components/ui/largeHeading"
import Paragraph from "@/components/ui/paragraph"
import UserAuthForm from "@/components/UserAuthForm"

const page=()=>{
    return(
        <div className="absolute inset-0 mx-auto conatiner flex h-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
                <div className="flex flex-col items-center gap-6 text-center">
                    <Link className={buttonVariants({variant:'ghost',className:'w-fit'})} href='/'><Icons.ChevronLeft className="mr-2 h-4 w-4"/>Back to home</Link>
                    <LargeHeading>Welcome back!</LargeHeading>
                    <Paragraph>Please sign in using your google account.</Paragraph>
                    <UserAuthForm/>
                </div>
            </div>
        </div>
    )
}

export default page;