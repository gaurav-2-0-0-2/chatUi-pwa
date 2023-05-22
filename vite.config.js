import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
})

const manifestForPlugin = {
  registrationType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icons.png", "maskable.png"],
  manifest: {
    name: "chatUI-pwa",
    short_name: "chatUI-pwa",
    theme_color: "#4ff321",
    background_color: "#4ff321",
    display: "standalone",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "/maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/logo256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/logo384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
}