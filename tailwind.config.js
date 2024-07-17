/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'MyBlue':'#274C77',
      },
      gridTemplateColumns: {
        'lg': 'repeat(3, 250px)',
        'sm': 'repeat(1, 250px)',
        'md': 'repeat(2, 250px)',
      },
    },
  },
  plugins: [],
}