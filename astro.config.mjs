import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://prvit.github.io',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
