'use client'
import { FC} from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/DropdownMenu"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import Button from "./ui/Button"
import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


export const ThemeToggle:FC=({})=>{
    const {setTheme}=useTheme()

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='sm'>
                    <Sun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100"/>
                    <Moon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' forceMount>
                <DropdownMenuItem onClick={()=>setTheme('light')}>
                    <Sun className="mr-2 h-4 w-4"/>
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setTheme('dark')}>
                    <Moon className="mr-2 h-4 w-4"/>
                    <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>setTheme('system')}>
                    <Laptop className="mr-2 h-4 w-4"/>
                    <span>System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}