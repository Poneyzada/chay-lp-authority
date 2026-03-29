/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#dfba4a',
          DEFAULT: '#c09e3f',
          dark: '#9a7812',
        },
        brand: {
          black: '#0a0a0a',
          zinc: '#121212',
          gold: '#c09e3f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 20px 50px -12px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
