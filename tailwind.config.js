/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#C1FFFA",
        "green-dark": "#1DA599",
        orange: "#FFC265",
        "black-title": "#4A4A4A",
        "black-content": "#454545",
        "black-nav-menu": "#525252",
        "black-button": "#3F3F3F",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      kufam: ["Kufam", "sans-serif"],
    },
  },
  plugins: [],
};
