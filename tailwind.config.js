/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/views/**/*.{erb,html}",
    "./app/helpers/**/*.rb",
    "./app/assets/javascripts/**/*.js",
    "./app/assets/stylesheets/**/*.css",
    "./app/**/*.{erb,html,rb,css,js}",
  ],
  // theme: {
  //   extend: {},
  // },
  plugins: [],
};
