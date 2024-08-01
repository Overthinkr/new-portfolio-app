/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/App.jsx", "./src/components/*.jsx", "./src/pages/*.jsx"],
  theme: {
    extend: {
      colors: {
        navcolor: "#f6f6f6",
        indigo: "#3c61b2",
        bottompage: "#FFFFFF",
        toppage: "#bfeffe",
      },
      backgroundImage: {
        "landing-one": "url('./resources/landing-one.jpg')",
        "landing-two": "url('./resources/landing-two.jpg')",
      },
    },
  },
  plugins: [],
};
