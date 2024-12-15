import "./globals.css";
import {Inter} from 'next/font/google' 
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toast";
import { Navbar } from "@/components/Navbar";

const inter = Inter({subsets:['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('antialiased',inter.className)} suppressHydrationWarning>
      <body
        className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'
      ><Providers>
        <Navbar/>
        <Toaster position="bottom-right"/>
        {children}
      </Providers>
      
      {/* Allow for more heigth on mobile devices */}
      <div className="h-40 md:hidden"/>
      </body>
    </html>
  );
}
