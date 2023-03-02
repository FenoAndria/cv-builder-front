/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: 'Gill Sans',
    container: {
      center: true
    },
    extend: {
      colors: {
        'primary': 'rgb(59,130,246)',
        'secondary': 'rgb(253,186,116)', 
        'default': 'rgb(167,139,250)',
        'green': '#1DB954',
        'dark': '#121212',
        'light': '#282828',
        'lightest': '#B3B3B3', 
        'darkest': '#191414',
        'yellow': '#F9ED69',
        'orange': '#F08A5D',
        'maroon': '#B83B5E',
        'purple': '#6A2C70',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('daisyui'),
    // require('flowbite/plugin'),
  ],
}