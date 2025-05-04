/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/views/**/*.{erb,html}',
      './app/helpers/**/*.rb',
      './app/assets/javascripts/**/*.js',
      './app/frontend/**/*.{js,vue,ts,jsx,tsx}',
      './app/**/*.{erb,html,rb}'
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }