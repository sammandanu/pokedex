/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#91CCD9",
        textPrimary: "#2B354B",
        gray: "#969BA5",
        borderGray: "#d9d9d9",
        bgPink: "#F27E7E",
        pink: "#F25781",
        textYellow: "#FFC37C",
        bgInputGray: "#EBF3F5",
      },
    },
  },
  plugins: [],
};
