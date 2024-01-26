/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        navUp: {
          '0%': {
            top: '0'
          },
          '100%': {
            top: '-64px'
          },
        },
        navDown: {
          '0%': {
            top: '-64px'
          },
          '100%': {
            top: '0'
          },
        },
      }
    },
  },
  plugins: [],
}

