const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        // rubik: ["Rubik Wet Paint", "sans-serif"],
        devanagari: ["Noto Serif Devanagari", "sans-serif"],
        bona: ["Bona Nova SC", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        tiny5: ["Tiny5", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}