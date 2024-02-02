/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-one': '#04041e',
        'dark-two': '#512B81',
        'dark-three': '#4477CE',
        'dark-four': '#8CABFF',
      },
      backgroundImage: {
        'bgwhite': 'radial-gradient(#3b82f6 0.65px, #e5e5f7 0.65px)',
        'bgdark': 'radial-gradient(#3b82f6 0.65px, #04041e 0.65px)'
      }
    },
  },
  plugins: [],
}

