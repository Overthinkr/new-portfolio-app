/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.jsx", "./src/components/*.jsx"],
  theme: {
    extend: {
      colors: {
        navcolor: "#f6f6f6",
        indigo: "#3c61b2",
      },
      backgroundImage: {
        "landing-one": `url('./resources/landing-one.jpg')`,
      },
    },
  },
  plugins: [],
};
