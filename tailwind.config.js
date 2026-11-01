/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#00304A", deep: "#00283E", card: "#0A3C58" },
        teal: { DEFAULT: "#00B4B8", dark: "#00858A", bright: "#00C2C7" },
        lime: { DEFAULT: "#84C06C", soft: "#D9F0CC" },
        bone: { DEFAULT: "#F2F6F7", mid: "#C9D8DF" },
        muted: { DEFAULT: "#9FB6C2", dark: "#4F6B7A" },
      },
      fontFamily: {
        sans: ["Barlow", "system-ui", "sans-serif"],
        display: ["'Barlow Condensed'", "Barlow", "sans-serif"],
      },
      maxWidth: { wrap: "1280px" },
    },
  },
  plugins: [],
};
