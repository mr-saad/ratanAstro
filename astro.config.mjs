// @ts-check
import { defineConfig, memoryCache } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import node from "@astrojs/node"
import vercel from "@astrojs/vercel"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: "https://ratan-astro.vercel.app",
  vite: {
    plugins: [tailwindcss(), icon()],
  },
  adapter: vercel(),
  cache: {
    provider: memoryCache()
  }
})
