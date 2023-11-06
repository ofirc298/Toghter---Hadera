/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "#2B59C0",
        form: "#E3DFE0",
      },
      fontFamily: {
        'heebo': ['"Heebo"', 'sans-serif']
      }
    },
  },
  plugins: [],
};
