import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    }
  },
  plugins: [nextui(
    {
      themes: {
        light: {
          colors: {
            background: "#F7F7F7", // or DEFAULT
            foreground: "#1B688D", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#1B688D",
            },
            secondary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#62B9B3",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#1B688D", // or DEFAULT
            foreground: "#F7F7F7", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: "#F7F7F7",
              DEFAULT: "#F7F7F7",
            },
            secondary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#62B9B3",
            },
          },
          // ... rest of the colors
        }
      },
    }
  )],
};
export default config;
