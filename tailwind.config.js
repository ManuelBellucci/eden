/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#effefd',
          '100': '#c7fffc',
          '200': '#90fffa',
          '300': '#51f7f6',
          '400': '#1ddfe4',
          '500': '#04c1c8',
          '600': '#008c95',
          '700': '#057880',
          '800': '#0a5d65',
          '900': '#0d4e54',
          '950': '#002c33',
        },
      }
    },
  },
  plugins: [
  ],
})

