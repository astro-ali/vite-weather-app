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
  },
  // plugins: [require("daisyui")],
};
