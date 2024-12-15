/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main:{
          300:"#3162DA",
          500:"#003773"
        },
        blackText:"#040404",
        textBody:{
          300:"#ADB3DA"
        },
        bodyColor:"#F7F7FC",
        foreground: "var(--foreground)",
      },
      borderRadius:{
        "circle":"100%"
      },
      boxShadow:{
        cardShadow:"0px 1px 48px 0px #CECEF14F;"
      },
      container: {
        center: true,
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '980px',
          'xl': '1080px',
          '2xl': '1080px',
          '3xl': '1400px', 
        },
        padding:{
          DEFAULT: '1rem',
          sm: '20px', 
          md: '20px',
          lg: '0px', 
        }
      },
    },
  },
  plugins: [],
};
