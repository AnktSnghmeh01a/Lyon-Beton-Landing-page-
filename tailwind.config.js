/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontSize: {
        '10xl': '13rem', // Add your custom font size
        '11xl': '11rem', // Add another custom font size
        // You can continue adding more sizes as needed
      },
      colors:{
        custom:"#EBEBEB",
      }
    },
  },
  plugins: [],
}