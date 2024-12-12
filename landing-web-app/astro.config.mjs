import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
export const site = "https://itsmee.org";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind()],
  adapter: node({
    mode: "standalone",
  }),
  site: site,
});
