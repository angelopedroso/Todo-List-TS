/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      padding: {
        '4.5rem': '4.5rem',
      },
      colors: {
        grayvar: {
          200: '#808080',
          300: '#383838',
          400: '#252525',
          500: '#0D0D0D',
        },

        babyBlue: {
          400: '#4EA8DE',
          500: '#2791d3',
        },
        lPurple: {
          300: '#585ABD',
        },
      },
    },
  },
  plugins: [],
};
