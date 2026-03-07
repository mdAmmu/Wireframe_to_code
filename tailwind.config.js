// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   webpack: (config, { dev }) => {
//     if (dev) {
//       config.cache = false;
//     }
//     return config;
//   },
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        background: '#ffffff',  
        foreground: '#111827',
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
