import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        peach: "#E7816B",
        black: "#1D1C1E",
        white: "#FFFFFF",
        peachLight: "#FFAD9B",
        greyDark: "#333136",
        greyLight: "#F1F3F5",
      },
      textColor: {
        peach: "#E7816B",
        black: "#1D1C1E",
        white: "#FFFFFF",
        peachLight: "#FFAD9B",
        greyDark: "#333136",
        greyLight: "#F1F3F5",
      },
    },
  },
  plugins: [],
};
export default config;
