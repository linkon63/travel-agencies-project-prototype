/** @type {import('tailwindcss').Config} */

const tailwindcssPrimeui=require('tailwindcss-primeui')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
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
      'blue':'#178EEF',
      'lightblue':'#E1F1FE',
      'secondarybg':'#F5FAFF',
      'graybg' : '#EEEEF5',
      'yellow':'#FDB022',
      'markcolor':'#095898',
      'borderCorner':'#C6D2DE',
      'number':'#423D3D',
      'conlighetext':'#6E6E73',
    }
  },
  plugins: [tailwindcssPrimeui],
}

