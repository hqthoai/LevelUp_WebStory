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
      /* Tablet ----------- */
      md: '48em',
      // => @media (min-width: 768px) { ... }

      /* Ipad Pro and small laptops ----------- */
      lg: '64.0625em',
      // => @media (min-width: 1025px) { ... }

      /* Desktops and laptops ----------- */
      xl: '76.5em',
      // => @media (min-width: 1224px) { ... }
    },
  },

  plugins: [],
};
