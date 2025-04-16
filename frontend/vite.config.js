import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme:{
    extend:{
      colors:{
        primaryColour: "#0067FF",
        yellowColour: "#FEB60D",
        purpleColour: "#9771FF",
        irisBlueColour: "#01B5C5",
        headingColour: "#181A1E",
        textColour: "#4E545F"
      },

      boxShadow:{
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      }
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
