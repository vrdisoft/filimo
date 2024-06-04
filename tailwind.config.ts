import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
    colors: {
      white: colors.white,
      gray: colors.gray,
      orange: colors.orange,
      zinc: colors.zinc,
      black: { 
        DEFAULT: "#151515" ,
        list:"#1e1e1e",
        border:"#282828",
        hover:"#272727"
      },
    },
    fontFamily: {
      IRANSans: ["IRANSans", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
