module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_6c: "#ffffff6c" },
        gray: { 600: "#717171", 800: "#4d4d4d", 900: "#18191f", "100_01": "#f5f7f9", "300_01": "#e8e8e3" },
        blue_gray: { 400: "#88939e", "900_01": "#263238" },
        green: { 50: "#e8f5e9", 500: "#4caf4f" },
        black: { 900: "#000000", "900_63": "#00000063" },
        green_500_75: "#4caf4f75",
      },
      boxShadow: { xs: "0px 2px  4px 0px #abbed133", sm: "0px 8px  16px 0px #abbed166" },
      fontFamily: { inter: "Inter", montserrat: "Montserrat" },
      opacity: { 0.2: 0.2, 0.1: 0.1 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
