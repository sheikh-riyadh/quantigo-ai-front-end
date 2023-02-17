/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-1': "url('/src/bg-image/hero-banner.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "night"],
  },
}
