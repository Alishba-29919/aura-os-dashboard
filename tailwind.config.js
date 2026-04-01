/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'obsidian': '#080808',     // Deep Black
        'royal-gold': '#D4AF37',   // Gold
        'glass-bg': 'rgba(255, 255, 255, 0.03)', 
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

