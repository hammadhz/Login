/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors:{
      primary: "#f43b3b",
      secondary: "#ffffff",
      third: "#c02d2d",
      fourth: "#f54747",
      five: "#000000",
      sixth: "#921e1e"
    },
    backgroundImage:{
     "background": "url('/src/img/bg.jpg')"
    },
    fontFamily:{
      "dios": ["Dosis, sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}
