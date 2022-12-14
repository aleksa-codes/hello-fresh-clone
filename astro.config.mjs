import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://aleksa-codes.github.io',
  base: '/hello-fresh-clone/',
  integrations: [tailwind(), sitemap(), image()]
});
