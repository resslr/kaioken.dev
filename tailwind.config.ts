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
      },
      spacing: {
        xs: "0.125rem",
      },
      screens: {
        xs: "360px",
      },
      backgroundColor: {
        stone: {
          150: "#edeceb",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
