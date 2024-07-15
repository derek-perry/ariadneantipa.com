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
        ariBlackDark: '#202126',
        ariBlackDarker: '#1C1D21',
        ariBlackDarkest: '#18191C',
        ariWhite: '#DEDBCD',
        ariWhiteHover: '#BCB9AD',
        ariWhiteFocus: '#AFADA1',
        ariWhiteActive: '#9B9990',
        ariGold: '#C5A974',
      }
    },
  },
  plugins: []
}
