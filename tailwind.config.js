/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./frontend.html", "./backend.html", "communities.html", "./guides.html", "./404.html", "./videos.html", "./contact.html",
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
        'darkwhite': '#D9D9D9',
        'lightwhite': '#EDEADE',
      },
    },
    
  },
  plugins: [],
}

