/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },

    extend: {
      colors: {
        softblue: 'hsl(231, 69%, 60%)',
        softred: 'hsl(0, 94%, 66%)',
        grayishblue: 'hsl(229, 8%, 60%)',
        verydarkblue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      backgroundImage: () => ({
        dots: 'url(../images/bg-dots.svg)',
      }),
    },
  },
  plugins: [],
};
