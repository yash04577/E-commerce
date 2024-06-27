import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:"#FFFFFF",
        primary1:"#363738",
        secondary:"#F5F5F5",
        secondary1:"#FEFAF1",
        secondary2:"#DB4444",
        textColor:"#FAFAFA",
        text1:"#7D8184",
        text2:"#000000",
        button:"#000000",
        button1:"#00FF66",
        button2:"#DB4444",
        hoverButton:"#E07575",
        

      }
    },
  },
  plugins: [],
};
export default config;
