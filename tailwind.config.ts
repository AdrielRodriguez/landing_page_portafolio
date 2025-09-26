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
        secondary: "#c4934bff",
        darkBg: "#1b1c22",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(46, 27, 39, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
