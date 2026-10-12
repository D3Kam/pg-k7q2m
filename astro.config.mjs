// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Kol duai.lt DNS nenukreiptas – svetainė veikia per GitHub Pages adresą su `base`.
// Prijungus domeną: SITE = 'https://www.duai.lt', BASE = '/', ir sukurti public/CNAME.
const SITE = 'https://d3kam.github.io';
const BASE = '/pg-k7q2m';

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
