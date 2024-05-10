/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "src/pagesfrontend.html", "src/pages/backend.html", "src/pages/communities.html", "src/pages/guides.html", "src/pages/404.html", "src/pages/videos.html", "src/pages/contact.html", "src/pages/devops.html",
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

