module.exports = {
  mode: 'jit',
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}'
  ],
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
  plugins: [],
}
