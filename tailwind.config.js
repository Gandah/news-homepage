/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        softOrange: 'hsl(35, 77%, 62%)',
        softRed:'hsl(5, 85%, 63%)',
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue:{
          100: 'hsl(233, 8%, 79%)',
          200: 'hsl(236, 13%, 42%)'
        },
        darkBlue: 'hsl(240, 100%, 5%)'
      },
      keyframes: {
        wiggle: {
          '5%, 50%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(1) rotate(-5deg)' },
          '25%': { transform: 'scale(1) rotate(5deg)' },
          '30%': { transform: 'scale(1) rotate(-3deg)' },
          '35%': { transform: 'scale(1) rotate(2deg)' },
          '40%': { transform: 'scale(1) rotate(0deg)' },
        },
        'zoom-in-zoom-out': {
          '0%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1.2, 1.2)'},
          '100%': { transform: 'scale(1, 1)' },
        }
    },
  },
  plugins: [],
}
}
