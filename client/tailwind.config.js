const extendedColors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{jsx,js,ts,tsx}",
    "./layouts/**/*.{jsx,js,ts,tsx}",
    "./pages/**/*.{jsx,js,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...extendedColors,
        blueGray: {
          50: "#f2f2f4",
          100: "#d2d2d4",
          200: "#a4a4a9",
          300: "#77777e",
          400: "#494953",
          500: "#1c1c28",
          600: "#161620",
          700: "#111118",
          800: "#0b0b10",
          900: "#060608",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        logo: ["Montserrat", "poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-debug-screens"),
  ],
};
