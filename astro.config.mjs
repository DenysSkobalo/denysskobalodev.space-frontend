import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  output: 'static', // або 'server' / 'hybrid'
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [svelte()]
});