import type { Config } from "tailwindcss"
import tailwindTypography from "@tailwindcss/typography"

export default {
  content: [
    "./src/{components,layouts,pages,renderer}/**/*.{html,js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "crimson",
        "primary-light": "#ec1b43",
        info: "#433b3d",
        dark: "#151313",
        light: "#fffafa",
        "light-highlight": "#fbf6f6",
        stone: {
          750: "#332f2f",
        },
      },
      spacing: {
        xs: "0.125rem",
      },
      screens: {
        xs: "460px",
      },
      backgroundImage: {
        "theme-gradient": "linear-gradient(153deg, #9913548a, #ed143d7d)",
      },
    },
  },
  plugins: [tailwindTypography()],
} satisfies Config
