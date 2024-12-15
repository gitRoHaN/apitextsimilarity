'use client'
import { FC ,useState,useEffect} from "react";
import {type Language} from 'prism-react-renderer'
import { useTheme } from "next-themes";
import { Highlight } from "prism-react-renderer";
  /* eslint-disable @typescript-eslint/no-var-requires */
const darkTheme=require('prism-react-renderer').themes.nightOwl
const lightTheme=require('prism-react-renderer').themes.nightOwlLight

interface codeProps{
    code:string
    show:boolean
    language:Language
    animationDelay?:number
    animated?:boolean
}

const Code:FC<codeProps>=({code,show,language,animated,animationDelay})=>{
    const {theme:applicationTheme}=useTheme()
    const [text,setText]=useState(animated?'':code)

    useEffect(()=>{
        if(show && animated){
            let i=0
            setTimeout(()=>{
                const intervalId=setInterval(()=>{
                    setText(code.slice(0,i))
                    i++
                    if(i>code.length){
                        clearInterval(intervalId)
                    }
                },15)
            },animationDelay||150)
        }
    },[code,show,animated,animationDelay])
    const lines = text.split(/\r\n|\r|\n/).length
    const theme = applicationTheme==='ligth'?lightTheme:darkTheme
    return(
        <Highlight
    theme={theme}
    code={text}
    language={language}  >
    {({ className, tokens, getLineProps, getTokenProps }) => (
      <pre className={className+'transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar'} style={{maxHeight:show?lines*24:0, opacity:show?1:0}}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
    )
}
export default Code;