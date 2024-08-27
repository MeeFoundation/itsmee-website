import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  adapter: node({
    mode: 'standalone',
  }),
  site: 'https://meextension.org/'
});
