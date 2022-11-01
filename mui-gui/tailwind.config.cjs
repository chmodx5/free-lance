/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  corePlugins: {
    preflight: true,
  },
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#FF7533",
          text: "#fff",
          light: "#FF7E42",
          dark: "#FF6924",
        },
        secondary: {
          main: "#004777",
          text: "#fff",
          light: "#0062A3",
          dark: "#003D66",
        },
        success: {
          main: "#00B295",
          text: "#fff",
          light: "#00CCAA",
          dark: "#00A388",
        },
        error: {
          main: "#A30000",
          text: "#fff",
          light: "#C70000",
          dark: "#8F0000",
        },
        info: {
          main: "#20A39E",
          text: "#fff",
          light: "#24B7B2",
          dark: "#1D9591",
        },
      },
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
