/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "src/pagesfrontend.html", "src/pages/backend.html", "src/pages/communities.html", "src/pages/guides.html", "src/pages/404.html", "src/pages/videos.html", "src/pages/contact.html", "src/pages/devops.html", "src/pages/ai.html", "src/pages/datascience.html", "src/pages/machinelearning.html", "src/pages/cybersecurity.html", "src/pages/blockchain.html", "src/pages/flutter.html", "src/pages/gamedev.html", "src/pages/projectmanagement.html", "src/pages/uxdesign.html", "src/pages/software-architect.html", "src/pages/react.html", "src/pages/computer-science.html", "src/pages/python.html", "src/pages/java.html", "src/pages/javascript", "src/pages/angular.html", "src/pages/node.html",
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

