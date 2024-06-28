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
      animation: {
        scroll: "scroll 50s linear infinite",
        "scroll-reversed": "scroll-reversed 50s linear infinite",
      },
      keyframes: {
        scroll: {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "scroll-reversed": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      kufam: ["Kufam", "sans-serif"],
    },
  },
  plugins: [],
};
