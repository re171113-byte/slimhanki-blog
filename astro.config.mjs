import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://food-blog.pages.dev',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
