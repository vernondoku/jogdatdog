/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#00304A", deep: "#00283E", card: "#0E4664" },
        teal: { DEFAULT: "#00B4B8", dark: "#00696D", bright: "#00C2C7" },
        lime: { DEFAULT: "#84C06C", soft: "#D9F0CC" },
        bone: { DEFAULT: "#F6F9FA", mid: "#D6E3E9" },
        muted: { DEFAULT: "#C4D5DE", dark: "#335468" },
      },
      fontFamily: {
        sans: ["Barlow", "Barlow Fallback", "system-ui", "sans-serif"],
        display: ["'Barlow Condensed'", "'Barlow Condensed Fallback'", "sans-serif"],
      },
      maxWidth: { wrap: "1280px" },
    },
  },
  plugins: [],
};
