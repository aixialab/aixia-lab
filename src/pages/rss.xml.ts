import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../constants/site';

export async function GET(context: { site: string }) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: SITE.name,
    description: SITE.subtitle,
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>${SITE.lang}</language>`,
  });
}
