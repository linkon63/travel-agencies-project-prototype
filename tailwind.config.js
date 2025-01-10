/** @type {import('tailwindcss').Config} */

const tailwindcssPrimeui=require('tailwindcss-primeui')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssPrimeui],
}

