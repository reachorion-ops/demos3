import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: "#1C1C1E",
        white: "#FFFFFF",
        lightBlush: "#F7F4F4",
        lightGrey: "#DADADA",
        vividRed: "#D92D20",
        navy: "#1E3A5F",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "-apple-system", "BlinkMacSystemFont", "'SF Pro Display'", "'SF Pro Text'", "'Helvetica Neue'", "sans-serif"],
        mono: ["var(--font-geist-mono)", "'SF Mono'", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.015em",
        tracked: "0.2em",
        widestCAD: "0.28em",
      },
      borderWidth: {
        hairline: "1px",
      },
    },
  },
  plugins: [],
};
export default config;
