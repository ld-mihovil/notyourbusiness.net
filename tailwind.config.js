/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/js/**/*.*",
    "./src/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['"Comic Sans MS"', '"cursive"']
      }
    },
  },
  plugins: [],
}
