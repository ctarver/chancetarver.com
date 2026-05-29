import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://chancetarver.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        lucide: ['*'],
        'simple-icons': [
          'github',
          'linkedin',
          'googlescholar',
          'orcid',
          'arxiv',
          'rss',
          'x',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
