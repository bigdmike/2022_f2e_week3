/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#8800CC',
        secondary_blue: '#0D0DF2',
        secondary_green: '#0BDA95',
        primary_white: '#E5E5E5',
        primary_black: '#141414',
      },
      fontFamily: {
        panchang: "'Panchang', sans-serif",
        gambetta: "'Gambetta', serif",
      },
    },
  },
  plugins: [],
};
