module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    }
  },
  variants: {
    extend: {
      padding: ['last'],
      margin: ['last'],
      filter: ['hover']
    }
  },
  plugins: []
}
