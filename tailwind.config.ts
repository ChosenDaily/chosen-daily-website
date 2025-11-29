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
        'oxford-blue': '#0B132B',
        'midnight-purple': '#1F1B58',
        'moonlit-white': '#EDEDED',
      },
    },
  },
  plugins: [],
};

export default config;
