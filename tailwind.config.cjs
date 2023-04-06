/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // darkMode: ['class', '[data-theme="night"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        md: '0rem',
        lg: '8rem',
        xl: '10rem',
        '2xl': '10rem',
      },
    },
    fontFamily: {
      sans: ['Manrope', 'Inter', 'Open Sans', 'sans-serif'],
      serif: ['Literata', 'Times New Roman', 'Georgia', 'serif'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['winter'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'winter',
  },
}
