module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'aris-black': '#000000',
        'aris-cream': '#FDF7F2',
        'aris-blue': '#3A0CA3',
        'aris-grey': '#858585'
      },
      fontFamily: {
        'aris-sora': ["'Sora'", 'sans-serif']
      },
      screens: {
        'xs': '360px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
