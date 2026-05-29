import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '@/site.config';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return rss({
    title: `${site.name} · Posts`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.pubDate,
        link: `/posts/${p.id.replace(/\.(md|mdx)$/, '')}/`,
      })),
  });
}
