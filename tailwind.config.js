/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/about.html", "./public/project.html", "./public/contack.html"],
  theme: {
    extend: {
      color: {
        primary: '#0ea5e9',
        secondary: '#60a5fa',
      },
      screens: {
        'sm' : '520px',
      },
    },
  },
  plugins: [],
}



