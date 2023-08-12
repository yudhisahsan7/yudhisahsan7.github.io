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
        'hero': "url('/img/hero.jpg')",
        'hero2': "linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.99)) , url('/img/hero1.jpg')"
      } ,
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

