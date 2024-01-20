/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            Ubuntu: ["Ubuntu Mono", "monospace"],
        },
        backgroundImage: {
          'hero-pattern': "url('./assets/img/bg.jpg')",
        },
        backgroundColor: {
          'btn-bg': 'rgb(6, 28, 37)',
        },
     
    },
},
  plugins: [],
}

