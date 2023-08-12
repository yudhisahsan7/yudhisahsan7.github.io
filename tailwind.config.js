/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['"Quicksand"', 'sans-serif'],
        'poppins': ["'Poppins'", 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/dist/img/hero1.webp')",
        'hero2': "linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.99)) , url('/dist/img/hero1.webp')"
      } ,
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

