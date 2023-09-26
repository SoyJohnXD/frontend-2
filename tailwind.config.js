/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        haken: ["'Hanken Grotesk'", "sans-serif"],
      },
      colors: {
        primary: "#FFA347", // Naranja principal
        white: "#FFFFFF", // Blanco
        "fresh-green": "#71C585", // Verde fresco
      },
    },
  },
  plugins: [],
};
