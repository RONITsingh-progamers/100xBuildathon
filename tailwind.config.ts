import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ourgreen: "#E5F61B",
        ourblack: "#0A1518",
        fontFamily: {
          gilmer: "var(--font-gilmer-regular)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
