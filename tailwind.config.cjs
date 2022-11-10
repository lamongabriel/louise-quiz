/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './*.html'
  ],
  theme: {
    extend: {
      colors: {
        primaryGray: '#1c1c1c',
        primaryPurple: '#9221e5',
        secondaryPurple: '#440175'
      },
      fontFamily:{
        sans: 'Roboto, sans-serif'
      }
    },
    screens: {
      tablet: {'max': '720px'}
    }
  },
  plugins: []
}
