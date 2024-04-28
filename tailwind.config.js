/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#002244',
        'navigation': '#132257',
        'primary': '#4477CE',
        'secondary': '#8CABFF',
        'textcol': '#F8F8FF',
      },
    },
    
  },
  plugins: [],
}

