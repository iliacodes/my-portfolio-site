/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};