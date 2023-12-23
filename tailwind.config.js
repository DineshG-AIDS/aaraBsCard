/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "50px",
        "5xl": "100px",
      },
      clipPath: {
        triangle: "polygon(51% 88%, 0 0, 100% 0)",
        circle: "circle(50% at 50% 50%)",
      },
      fontFamily: {
        custom: ["custom1", "sans"],
        custom1: ["custom2", "sans"],
        custom2: ["custom3", "sans"],
      },
    },
    // screens: {
    //   xs: "480px",
    //   sm: "768px",
    //   md: "1060px",
    //   xxs: "375px",
    //   spx: "320px",
    //   spx1: "318px",
    // },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
