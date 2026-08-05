import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
    assets: {
      binding: 'FRONTEND_ASSETS',
    },
    routes: {
      strategy: 'static',
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [svelte()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk', 'fr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    },
  },
});