/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        5: "5.5rem",
      },
    },
    screens: {
      mobile: "480px",
    },
    letterSpacing: {
      widest1: ".25em",
    },
  },
  plugins: [],
};
