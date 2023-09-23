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
        "gray-dark": "#333333", // Gris oscuro
        "ligth-blue": "#0072BB", // Azul claro
        "light-yellow": "#FFD100", // Amarillo brillante
        red: "#FF0000", // Rojo
      },
    },
  },
  plugins: [],
};
