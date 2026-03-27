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
          light: '#d4af37',
          DEFAULT: '#c19717',
          dark: '#a68012',
        },
        brand: {
          black: '#09090b',
          zinc: '#18181b',
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
