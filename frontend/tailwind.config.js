/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColour: "#902929",
        yellowColour: "#FEB60D",
        purpleColour: "#9771FF",
        irisBlueColour: "#01B5C5",
        headingColour: "#181A1E",
        textColour: "#4E545F"
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
      }
    },
  },
  plugins: [],
}
