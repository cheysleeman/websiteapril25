/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000f', // Bright green
        secondary: '#FF5722', // Orange
        neutral: {
          900: '#1A1A1A', // Charcoal
          100: '#F5F5F5', // Off-white
        }
      },
      fontFamily: {
        sans: ['Helveltica', 'sans-serif'],
        display: ['Arial', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};