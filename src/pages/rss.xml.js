import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
  
  return rss({
    title: '슬림한끼',
    description: '맛있게 먹고, 날씬하게 사는 비밀 - 저칼로리 레시피와 다이어트 식단 정보',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>ko-KR</language>`,
  });
}
