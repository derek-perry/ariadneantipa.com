/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
          ariBlack: '#111214',
          ariWhite: '#DEDBCD',
          ariBrown: '#2D2014',
          ariRed: '#69443B',
          ariGold: '#C5A974',
      }
    },
  },
  plugins: []
}
