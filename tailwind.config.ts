import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Lora", "serif"]
      },
      fontSize: {
        "4xl": ["2.25rem", "2.5rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "2xl": ["1.5rem", "2rem"],
        base: ["1rem", "1.5rem"],
        sm: ["0.875rem", "1.25rem"]
      },
      spacing: {
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem"
      }
    }
  }
};
export default config;
