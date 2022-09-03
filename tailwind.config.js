/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      lobster: ['"Lobster Two"', "cursive"],
      elmessiri: ['"El Messiri"', "sans-serif"],
      fira: ['"Fira Sans"', "sans-serif"],
      cantarell: ['"Cantarell"', "sans-serif"],
      roboto: ['"Roboto"', "sans-serif"],
      oxygen: ['"Oxygen"', "sans-serif"],
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],

  daisyui: {
    darkTheme: "dracula",
  },
};
