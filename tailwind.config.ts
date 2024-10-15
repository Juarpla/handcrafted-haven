import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-orange': '#F4A261',
        'custom-white':'#eeeeee'
      },
      boxShadow: {
        'text-yellow': '2px 2px 5px #E9C46A',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
};
export default config;
