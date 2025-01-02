/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3E8E41',
        'primary2': '#135f16c9',
        'primary3': '#82f086',
        'secondary': '#ebaf2d',
        'secondary2': '#e28307',
        'secondary3': '#ffb049',
        'background': '#FFFFFF',
        'backgroundSec': '#F4F4F4',
        'text': '#353535',
        'hover': '#ececec',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'Open Sans', 'Arial', 'Helvetica', 'sans-serif'],
      },
      screens: {
        'xs': '500px',
        'sm': '700px',
        'md': '970px',
        'lg': '1112px',
        'xl': '1270px',
      }
    },
  },
  plugins: [],
}

