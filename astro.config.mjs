import { defineConfig } from "astro/config";
import autoprefixer from "autoprefixer";

export default defineConfig({
  site: "https://elliotdavies.co.uk",
  build: {
    format: "file",
  },
  trailingSlash: "never",
  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  },
});
