// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Quando pubblichi il sito, imposta qui il dominio definitivo,
  // es. 'https://aria-consulti.it' — serve per SEO e sitemap.
  site: 'https://aria.example.com',
  build: {
    format: 'directory',
  },
});
