import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
export const site = "https://itsmee.org";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  adapter: node({
    mode: "standalone"
  }),
  site: site
});