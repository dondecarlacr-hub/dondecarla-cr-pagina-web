/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D1B14",
          light: "#B57258",
        },
        secondary: {
          1: "#8B6F47",
          2: "#9F7F51",
          3: "#AE8E61"
        },
        ternary: {
          1: "#1F2937",
          2: "#3C506B",
          3: "#5A779F",
          4: "#374151"
        },
        golden: {
          1: "#D4AF37"
        },
        white: {
          1: "#FFFFFF",
          2:"#4D4D4D"
        },
        black: {
          1: "#000000"
        },
        accent: {
          DEFAULT: "#D4AF37",
        },
        background: {
          light: "#F5F1EB",
          beige: "#F5F1EB",
          white: "#FFFFFF"
        },
      },
      fontFamily: {
        merriweather: ['Merriweather', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        sans: ["Inter", "system-ui", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        dancing: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
