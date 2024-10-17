/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      minHeight: {
        "screen-without-header": "calc(100vh - 20px)",
      },
    },
  },
  plugins: [],
};
