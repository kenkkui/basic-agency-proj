import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi"],
    },
    fontSize: {
      h6: "22px",
      base: "18px",
      med: "14px",
      sm: "11px",
    },
    extend: {
      colors: {
        black: "var(--black)",
        "light-grey": "var(--light-grey)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
} satisfies Config;
