import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    assets: {
      binding: 'CF_ASSETS',
    },
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.toml',
    },
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [svelte()]
});