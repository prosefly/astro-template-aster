import rss from '@astrojs/rss'
import { config } from '@/data/config'
import { getPublishedBlogPosts } from '@/lib/content'

export async function GET(context: { site?: URL }) {
  const posts = await getPublishedBlogPosts()

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: context.site ?? config.site.url,
    items: posts.map(({ id, data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.publishedAt,
      link: `/blog/${id}/`,
    })),
  })
}
