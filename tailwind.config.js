const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("tailwind-scrollbar")],
  theme: {
    screens: {
      xs: "390px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        accent: "#1B3593",
        btnAccent: "#3671E9",
        bgray: "#EAEAEA",
        titlegray: "#4C506B",
        subgray: "#828282",
        dark: "#2F2F2F",
        landingBlue: "#0C4DAE",
        transWhite: "rgba(255, 255, 255, 0.1)",
        textBlue: "#0D0D2B",
        lightBlue: "#3671E9",
        statsGray: "#E0E0E0",
        titlegray: "#4C506B",
        subgray: "#828282",
        textblue: "#70B2FF",
        textGray: "#B1AFCD",
        dashboardLink: "#53B9EA",
        buttonBlue: "#0C4DAE",
        grayText: "#8D8D8D",
        borderShade: "#ADADAD",
        gray2: "#808080",
        lightBlue: "#4285F4",
      },
    },
  },
};
