const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        trueGray: colors.trueGray,
        lightBlue: colors.lightBlue,
        orange: colors.orange,
      },
    },
  },
  plugins: [],
};
