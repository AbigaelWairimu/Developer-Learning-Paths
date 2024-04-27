/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#512B81',
      'navigation': '#35155D',
      'primary': '#4477CE',
      'secondary': '#8CABFF',
      'textcol': '#F8F8FF',
    },
  },
  plugins: [],
}

