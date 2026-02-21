import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores inspiradas no John Mwendwa
        background: "#0a0a0a",
        card: "#111111",
        border: "#222222",

        
      }
    },
  },
  plugins: [],
};
export default config;

