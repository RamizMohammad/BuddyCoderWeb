/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Material Design colors as specified
        'material-dark': '#121212',
        'primary-blue': '#1976D2',
        'accent-teal': '#009688',
        'amber-highlight': '#FFC107',
        'surface': '#1E1E1E',
        'surface-variant': '#2D2D2D',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'fira': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};