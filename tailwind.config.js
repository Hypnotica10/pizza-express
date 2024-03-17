/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': {opacity: 1},
          '100%' : {opacity: 0}
        }
      }
    },
    fontFamily: {
      montserrat: 'Montserrat, sans-serif',
      sriracha: 'Sriracha',
    },
    colors: {
      primary: '#c00a2d',
      orange: '#ff9c00',
      yellow: '#fff000'
    },
    animation: {
      'isLoaded': 'fade 2000ms ease-in-out 1'
    }
  },
  plugins: [],
}