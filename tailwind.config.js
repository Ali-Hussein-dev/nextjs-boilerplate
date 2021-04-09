const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
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
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
