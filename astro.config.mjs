import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://monstermulching.nz',
  // Keep the existing URLs (/privacy.html, /thank-you.html).
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !page.includes('thank-you') })],
  vite: { plugins: [tailwindcss()] },
});
