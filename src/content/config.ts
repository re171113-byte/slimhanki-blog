import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string().optional(),  // 최종 수정일 (선택)
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    author: z.string().optional().default('슬림한끼'),  // 작성자 (선택, 기본값: 슬림한끼)
  }),
});

export const collections = {
  posts: postsCollection,
};
