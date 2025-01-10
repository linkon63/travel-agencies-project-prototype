/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
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
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/components/About/img/309 1.png')",

      },
      colors:{
        'markcolor':'#095898',
        'secondary':'#F5FAFF',
        'primary1':'#178EEF',
        'cardbody':'#F8F8F8',
        'borderCorner':'#C6D2DE',
        'textheader':'#545454',
        'textpera':'#5F5F5F',
        'number':'#423D3D',
        'textc':'#6E6E73',
        'conbg' : '#EEEEF5'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

