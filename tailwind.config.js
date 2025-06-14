/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',
        secondary: '#DEB887',
        text: '#2C3E50',
        'text-light': '#666666',
        background: '#FFFFFF',
        'card-bg': '#F8F9FA',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(139, 69, 19, 0.1)',
        'md': '0 4px 6px rgba(139, 69, 19, 0.1)',
        'lg': '0 10px 15px rgba(139, 69, 19, 0.1)',
      },
    },
  },
  plugins: [],
} 