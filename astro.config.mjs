import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://minimalist.lv',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'lv'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
