/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pDark: "#2E2E2E",
        pWhite: "#F9F9F9",
        pGray: "#C9C9C9",
        pGreen: "#58DCBD",
        pdGreen: "#46B097",
      },
    },
  },
  plugins: [],
}