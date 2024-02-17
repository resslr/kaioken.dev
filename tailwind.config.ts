import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/{components,layouts,pages,renderer}/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        xs: "0.125rem",
      },
      screens: {
        xs: "360px",
      },
      backgroundColor: {
        gray: {
          50: "#eee",
          100: "#dcdcdc",
          200: "#c6c6c6",
          300: "#b0b0b0",
          400: "#9a9a9a",
          500: "#848484",
          600: "#6e6e6e",
          700: "#585858",
          800: "#424242",
          900: "#2c2c2c",
          950: "#111",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
