/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      padding: {
        '4.5rem': '4.5rem',
      },
      colors: {
        darkGray: '#0D0D0D',
        mediumGray: '#252525',
        lightGray: '#383838',
      },
    },
  },
  plugins: [],
};
