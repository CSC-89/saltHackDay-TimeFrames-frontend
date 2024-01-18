/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#88B1E0",
        secondary: '#F3FAFF',
        buttonSubmit: "#DFF5F2",
        buttonSubmitFont: "#3A9189"
      }
    },
  },
  plugins: [],
});

