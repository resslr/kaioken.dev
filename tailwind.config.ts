import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/{components,layouts,pages,renderer}/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "crimson",
        "primary-light": "#ec1b43",
        dark: "#131313",
        light: "#fffafa",
      },
      spacing: {
        xs: "0.125rem",
      },
      screens: {
        xs: "460px",
      },
      backgroundColor: {
        stone: {
          150: "#edeceb",
        },
      },
      backgroundImage: {
        "theme-gradient": "linear-gradient(153deg,#ba93ff,#9f3942)",
        "theme-gradient-dark": "linear-gradient(153deg,#7552b3,#871e27)",
      },
    },
  },
  plugins: [],
} satisfies Config
