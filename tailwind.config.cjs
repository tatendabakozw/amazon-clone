/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          original: "#131921",
          dark: "#71061f",
          light: "#232F3E",
          superdark: "#410312",
          superlight: "#37475A",
        },
        secondary: {
          original: "#FFD814",
          dark: "#b36b25",
          light: "#FCBB6A",
          superdark: "#06162a",
          superlight: "#ffd6ae",
        },
      },
    },
  },
  plugins: [],
}
