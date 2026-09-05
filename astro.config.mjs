// @ts-check
import { defineConfig, fontProviders } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import vercel from "@astrojs/vercel"
import { cacheVercel } from "@astrojs/vercel/cache"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: "https://ratan-astro.vercel.app",
  vite: {
    plugins: [tailwindcss(), icon()],
  },
  adapter: vercel(),
  cache: {
    provider: cacheVercel()
  },
  fonts: [{
    provider: fontProviders.google(),
    name: "DM Sans",
    cssVariable: "--font-dm-sans",
    display: "swap"
  }],
  integrations: [icon()]
})