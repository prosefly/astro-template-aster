import { getCollection, type CollectionEntry } from 'astro:content'

export type BlogPost = CollectionEntry<'blog'>
export type Project = CollectionEntry<'projects'>

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft)

  return posts.sort(
    (left, right) =>
      right.data.publishedAt.getTime() - left.data.publishedAt.getTime(),
  )
}

export async function getPublishedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }) => !data.draft)

  return projects.sort(
    (left, right) =>
      right.data.order - left.data.order || right.data.year - left.data.year,
  )
}
