/** @type {import('tailwindcss').Config} */
import theme from "mee-components/tailwind";
export default {
  darkMode: 'selector',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/mee-components/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: theme,
  plugins: [],
};
