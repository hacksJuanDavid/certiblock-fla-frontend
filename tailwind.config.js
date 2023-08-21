const themes = require('./src/themes/index')
module.exports = {
  content: [
    '{pages,src}/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  important: true, // important in prod is must be
  theme: ['default'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{ ...themes }],
  },
}
