/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
      sans: ['Source Sans Pro', 'Open Sans', 'sans-serif'],
      serif: ['Times New Roman', 'Georgia', 'serif'],
    },
  },
  plugins: [require('daisyui')],
}
