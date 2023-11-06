/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "#2B59C0",
        background: "#E3DFE0",
        footer: "#CDCDCD",
        banner: "#642C8A",
      },
      fontFamily: {
        'heebo': ['"Heebo"', 'sans-serif']
      }
    },
  },
  plugins: [],
};
