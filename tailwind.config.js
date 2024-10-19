/** @type {import('tailwindcss').Config} */

const headerHeight = "60px";

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
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["dim", "emerald"],

    styled: true,

    themes: true,

    base: true,

    utils: true,

    logs: true,

    rtl: true,
  },
};
