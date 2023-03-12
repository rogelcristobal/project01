/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily:{
      "plus":["Plus Jakarta Sans","sans-serif"],
      "robotoMono":["Roboto Mono","monospace"],
      "golos":["Golos Text","sas-serif"],

      // personal use fonts
      "mori":["mori-regular","sans-serif"],
      "moriLight":["mori-light","sans-serif"],
      "moriSemibold":["mori-semibold","sans-serif"]
    }},
  }
}