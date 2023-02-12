/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        1240: '1240px',
        588: '588px',
      },

      colors: {
        brand: {
          siyoxrang: '#0D0D2B'
        },
      },

      fontFamily: {
        rubik: 'Rubik'
      }
    },
  },
  plugins: [],
}
