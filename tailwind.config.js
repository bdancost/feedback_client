/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // aqui diz para olhar todos os arquivos JS/TS/JSX/TSX na pasta src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // azul-indigo
        secondary: "#ec4899", // rosa
        accent: "#fbbf24", // amarelo
      },
    },
  },
  plugins: [],
};
