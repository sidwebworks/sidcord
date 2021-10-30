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

        neutral: {
          100: "#d4d5d7",
          200: "#aaabaf",
          300: "#7f8287",
          400: "#55585f",
          500: "#2a2e37",
          600: "#22252c",
          700: "#191c21",
          800: "#111216",
          900: "#08090b",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        logo: ["Inter", "sans-serif"],
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
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],

  daisyui: {
    themes: ["dark"],
    styled: false,
  },
};
