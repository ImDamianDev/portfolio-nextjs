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
            background: "#F7F7F7", // background color
            foreground: "#1B688D", // text color
            primary: "#1B688D",
            secondary:"#62B9B3", //
            content2: "#0F172A",
            content3:"#0F172A",
            content4:"#0F172A",
            // ... rest of the colors
          },

        },
        dark: {
          colors: {
            background: "#0F172A", // background color
            foreground: "#F7F7F7", // text color
            primary: "#1B688D",
            secondary:"#62B9B3", //
            content2: "#0F172A",
            content3:"#0F172A",
            content4:"#0F172A",
            // ... rest of the colors
          },
          // ... rest of the colors
        }
      },
    }
  )],
};
export default config;
