# Mee-Components

## Installation

1. Clone/download repo
2. `pnpm install`

## Usage

### Development

Run the app:

```bash
pnpm dev
```

### Production

```bash
pnpm build
```

- Builds the app to `dist/`

### Use as a library

#### tailwind.config.mjs

```bash
/** @type {import('tailwindcss').Config} */
import theme from "mee-components/tailwind";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/mee-components/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: theme,
  plugins: [],
};

```

#### style file

```bash
@import "mee-components/base-theme";
```

#### to use icons add to Layout.astro

```bash
import 'bootstrap-icons/font/bootstrap-icons.css';
```
