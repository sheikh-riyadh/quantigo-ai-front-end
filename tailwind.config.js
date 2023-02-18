/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'data-theme',
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
    themes: ["light", "night", "dark"],
  },
}
