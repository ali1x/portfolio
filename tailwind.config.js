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
      }
    },
  },
  plugins: [],
}

