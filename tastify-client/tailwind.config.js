/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        car: '\'Carter One\', sans-serif',
        audio: 'Audiowide, sans-serif',
        bungee: 'Bungee, sans-serif',
        pacifico: 'Pacifico, cursive',
      },
      colors: {
        primary: '#FFA637',
        secondary: '#FFE352',
        button: '#D62976',
        back: '#FCF5E5'
      }
    },
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: [],
  },
}

