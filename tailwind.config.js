/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        yekan: ["yekan", "serif"],
      },
      boxShadow: {
        contactShadow: "rgba(0, 0, 0, 0.09) 0px 10px 50px",
      },
    },
  },
  plugins: [],
};
