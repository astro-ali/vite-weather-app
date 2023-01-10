/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        weathergray: {
          100: "#F6F6F8",
        },
      },
    },
    screens: {
      xs: "432px",
      sm: "532px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
  },
};
