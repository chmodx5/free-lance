/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF7533",
        secondary: "#004777",
        success: "##00B295",
        error: "#A30000",
        info: "#20A39E",
        dark: "#24292E",
      },
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
