import colors from "tailwindcss/colors"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(var(--primary-color))",
      neutral: "hsl(var(--neutral-color))",
      neutral2: "hsl(var(--neutral2-color))",
      neutral3: "hsl(var(--neutral3-color))",
      white: colors.white,
      black: colors.black,
      violet: colors.violet,
      purple: colors.purple,
      indigo: colors.indigo
    },
    extend: {}
  },
  plugins: []
}
