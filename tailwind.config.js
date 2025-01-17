/** @type {import('tailwindcss').Config} */


const tailwindcssPrimeui=require('tailwindcss-primeui')
// const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: { backgroundImage: {
      'hero-pattern': "url('./src/components/About/img/309 1.png')",

    },},
    fontFamily: {
      "poppins": ["Poppins", "serif"],
      "inter": ["Inter", "serif"]
  },
    screens: {
      'xs': '320px',
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },

    colors:{
      'white':'#FFFFFF',
      'textheader':'#545454',
      'textpera':'#5F5F5F',
      'formtextlight':'#737373',
      'formtextdark':'#5A5A5A',
      'formborder':'#CCCCCC',
      'offerbg':'#E5F4FF',
      'card1bg':'#F8F8F8',
      'highblue':'#178EEF',
      'lightblue':'#E1F1FE',
      'secondarybg':'#F5FAFF',
      'graybg' : '#EEEEF5',
      'highyellow':'#FDB022',
      'markcolor':'#095898',
      'borderCorner':'#C6D2DE',
      'number':'#423D3D',
      'conlighetext':'#6E6E73',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'h1' :'4rem',
      'h2' :'3rem',
      'h3' :'2rem',
      'h4' :'1.5rem',
      'title' :'1.25rem',
      'subtitle' :'1rem',
      'small' :'0.75rem',
    },
  },
  plugins: [tailwindcssPrimeui,require('flowbite/plugin'), ],


}

