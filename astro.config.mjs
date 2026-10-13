// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Svetainė veikia per prijungtą domeną www.duai.lt (public/CNAME).
const SITE = 'https://www.duai.lt';
const BASE = '/';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'lt',
    locales: ['lt', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      i18n: { defaultLocale: 'lt', locales: { lt: 'lt-LT', en: 'en' } },
    }),
  ],
});
