/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Blue": "hsl(233, 26%, 24%)",
        "Lime-Green": "hsl(136, 65%, 51%)",
        "Bright-Cyan": "hsl(192, 70%, 51%)",
        "Grayish-Blue": "hsl(233, 8%, 62%)",
        "Light-Grayish-Blue": "hsl(220, 16%, 96%)",
        "Very-Light-Gray": "hsl(0, 0%, 98%)",
      },

      content: {
        MobileImage: "url('./assets/image-mockups.png')",
        shapesMobile: "url('./assets/bg-intro-mobile.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        1320: "141%",
        50: "100%",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
