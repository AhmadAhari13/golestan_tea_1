/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "1000px",
      // => @media (min-width: 1000px) { ... }

      lg: "1000px",
      // => @media (min-width: 1000px) { ... }
    },
  },
  plugins: [],
};
