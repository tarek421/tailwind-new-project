/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/image/headerBg.jpg')",
        'footer': "url('/image/footerBg.jpg')",
        'service': "url('/image/serviceBg.jpg')",
      },
      fontFamily: {
        'tarek': 'PT Serif'
      },
    },
  }, 
  plugins: [],
}