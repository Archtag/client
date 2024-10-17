/** @type {import('tailwindcss').Config} */

const headerHeight = "30px";

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      minHeight: {
        "screen-without-header": `calc(100vh - ${headerHeight})`,
      },
      spacing: {
        "header-height": headerHeight,
      },
    },
  },
  plugins: [],
};
