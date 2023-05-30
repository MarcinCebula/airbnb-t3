import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    fontFamily: {  
      sans: ['Nunito Sans', 'sans-serif']
    },
  },
  plugins: [],
} satisfies Config;
