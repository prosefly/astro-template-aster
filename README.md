# Aster

Aster is a minimal Astro projects-and-blog template for independent designers and developers. It
combines project case studies and long-form writing in a restrained editorial layout inspired by
quiet studio journals.

The Aster identity uses a custom radial flower mark with violet star-shaped petals and a warm
golden center. The source artwork lives in `public/images/aster-mark.svg`, with a simplified
small-size variant in `public/favicon.svg`.

[Live demo](https://astro-template-aster.prosefly.dev/) ·
[Source](https://github.com/prosefly/astro-template-aster)

## Features

- Astro 7 static output
- Tailwind CSS 4 utilities throughout layouts, pages, and components
- `@tailwindcss/typography` for blog posts and project case studies
- Separate `projects` and `blog` content collections
- MDX and `@prosefly/astro-components`
- Responsive project and post indexes
- Light and dark themes
- Full-content RSS feed and generated sitemap
- Accessible semantic markup and reduced-motion support

## Start Aster

```sh
npm install
npm run dev
```

## Content

Project entries live in `src/content/projects/`. Blog posts live in `src/content/blog/`. Their
schemas are defined in `src/content.config.ts`. Add a project reference to a blog post to show it
on that project's page:

```yaml
project: astro-components
```

The included demo content presents Aster alongside real projects and articles from the Prosefly
ecosystem. Replace those entries and the site configuration in `src/data/config.ts` when starting a
new site.

```text
src/
  content/
    blog/
    projects/
  content.config.ts
  data/
    config.ts
  pages/
    blog/
    projects/
```

Update the site identity, URL, shared links, navigation, and footer content in
`src/data/config.ts`. Astro, the RSS feed, and the sitemap use the same configured site URL.

Blog pagination and project-page related posts are configured in the same file. The first blog page
uses `/blog/`; later pages use `/blog/page/2/`, `/blog/page/3/`, and so on.

```ts
content: {
  blog: { postsPerPage: 5 },
  projects: { relatedPostsLimit: 3 },
}
```

## Commands

| Command           | Action                          |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start the development server    |
| `npm run check`   | Run Astro and TypeScript checks |
| `npm run build`   | Build the static site           |
| `npm run preview` | Preview the production build    |
| `npm run format`  | Format the project              |

## License

BSD-3-Clause
