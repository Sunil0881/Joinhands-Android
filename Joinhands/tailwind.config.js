/** @type {import('tailwindcss').Config} */
module.exports = {
  assets: ['./assets/fonts/'],
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./NGOscreens/**/*.{js,jsx,ts,tsx}", "./Donorscreens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        NICOMOJI:["Nico-Moji"],
        Ham:['Hammersmith One', 'sans-serif'],
      }
    },
  },
  plugins: [],
}