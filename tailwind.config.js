module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    debugScreens: {
      style: {
        backgroundColor: '#eab308',
        color: '#334155',
        opacity: 0.2,
      },
      position: ['top', 'left'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
    require('tailwind-heropatterns')({
      // as per tailwind docs you can pass variants
      variants: [],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: [],

      // The foreground colors of the pattern
      colors: {
        default: '#d1d5db',
        'blue-dark': '#000044', //also works with rgb(0,0,205)
      },
      // The foreground opacity
      opacity: {
        default: '0.4',
        10: '0.1',
        20: '0.2',
        30: '0.3',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
        100: '1.0',
      },
    }),
  ],
  variants: {},
};
