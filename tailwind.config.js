/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: '#722F37',
        'wine-light': '#8A3A43',
        'wine-dark': '#5A242B',
        'wine-accent': '#B85C65',
        'wine-text': '#F8F1F1',
        'wine-text-secondary': '#E6D5D7',
        'wine-bg': '#1A0A0C',
        'wine-card': '#2A1215',
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

