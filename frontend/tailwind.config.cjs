/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF7533",
      },
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
