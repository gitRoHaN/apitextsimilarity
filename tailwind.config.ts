const {colors} = require('tailwindcss/colors')
const {fontFamily} = require('tailwindcss/defaultTheme')
import type { Config } from "tailwindcss";

export default {
  darkMode:['class'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'1.5rem',
      screens:{
        '2xl':'1360px'
      }
    },
    extend: {
      fontFamily:{
        sans:['var(--font-inter)',...fontFamily.sans]
      },
      colors: {
        ...colors,
        'light-gold':'#f5bc51',
        'dark-gold':'#533519',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('tailwindcss-animate'),require('@tailwindcss/typography')],
} satisfies Config;
