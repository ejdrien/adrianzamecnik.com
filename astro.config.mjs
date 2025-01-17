import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  build: {
    format: "file"
  },
  experimental: {
    contentIntellisense: true,
  },
  integrations: [sitemap()],
  publicDir: "./static",
  server: {
    port: 3849,
    host: "0.0.0.0",
  },
  site: "https://adrianzamecnik.com",
  trailingSlash: "never",
});