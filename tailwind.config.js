/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      pop: ['Poppins', 'sans-serif'],
      refault: ['Refault'],
    },
    screens: {
      md: '48em',
      // => @media (min-width: 768px) { ... }

      lg: '73.9375em',
      // => @media (min-width: 1183px) { ... }
    },
  },

  plugins: [],
};
