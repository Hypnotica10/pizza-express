/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'isLoaded': 'fadeOut 500ms ease-in-out 1',
        'fadeInDown': 'fadeInDown 250ms ease-in-out 1',
        'fadeOutUp': 'fadeOutUp 250ms ease-in-out 1 forwards'
      },
      backgroundImage: {
        'footer': 'url(/src/assets/footer_bg.jpg)'
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeOutUp: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-100%)'
          }
        }
      },
      colors: {
        primary: {
          400: '#c00a27',
          500: '#a9001b',
          600: '#850015'
        },
        orange: '#ff9c00',
        yellow: '#fff000',
        gray: {
          400: '#f6f6f6',
          500: '#e2e2e2',
          600: '#959595'
        },
      },
      fontFamily: {
        montserrat: 'Montserrat, sans-serif',
        sriracha: 'Sriracha',
      },
      fontSize: {
        xxs: '10px',
        xs: '12px'
      },
      zIndex: {
        '9999': '9999'
      },
    },
    screens: {
      'xs': '572px',
      ...defaultTheme.screens,
    },
  },
  plugins: [

  ],
}