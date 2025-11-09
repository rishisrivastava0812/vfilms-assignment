/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7EFE8',
        ink: '#1C2635',
        muted: '#5D6B7A',
        accent: '#F26938',
        accentDark: '#C44D22',
      },
      fontFamily: {
        display: ['"Dancing Script"', 'cursive'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}