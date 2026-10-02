import rss from '@astrojs/rss'
import mdxRenderer from '@astrojs/mdx/server.js'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { render } from 'astro:content'
import { config } from '@/data/config'
import { getPublishedBlogPosts } from '@/lib/content'

function stripScripts(html: string) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
}

export async function GET(context: { site?: URL }) {
  const posts = await getPublishedBlogPosts()
  const site = context.site ?? new URL(config.site.url)
  const container = await AstroContainer.create({
    astroConfig: { site: site.href },
  })
  container.addServerRenderer({ renderer: mdxRenderer })
  const items = await Promise.all(
    posts.map(async (post) => {
      const { Content } = await render(post)
      const postUrl = new URL(`/blog/${post.id}/`, site)

      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.publishedAt,
        link: postUrl.href,
        content: stripScripts(
          await container.renderToString(Content, {
            request: new Request(postUrl),
          }),
        ),
      }
    }),
  )

  return rss({
    title: config.site.title,
    description: config.site.description,
    site,
    items,
  })
}
