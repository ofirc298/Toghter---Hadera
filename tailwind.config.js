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
      },
      backgroundImage:{
        grdnt:"linear-gradient(338deg, #FD4C8F 28.36%, #9460C1 48.62%, #025EB5 63.25%)",
        "lg-grdnt":"linear-gradient(99deg, #FD4C8F 1.14%, #9460C1 24.31%, #025EB5 78.37%)"
      }
    },
  },
  plugins: [],
};
