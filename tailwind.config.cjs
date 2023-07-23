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
      sans: ['Manrope', 'Inter', 'Helvetica', 'sans-serif'],
      serif: ['Literata', 'Times New Roman', 'Georgia', 'serif'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['winter'],
    darkTheme: 'winter',
    base: true,
    styled: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },
}
