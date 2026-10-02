import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import proseflyComponents from '@prosefly/astro-components/integration'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import { config } from './src/data/config.ts'

export default defineConfig({
  site: config.site.url,
  output: 'static',
  devToolbar: { enabled: false },
  integrations: [
    proseflyComponents({
      icons: {
        preload: [
          'lucide:arrow-left',
          'lucide:arrow-up-right',
          'lucide:moon',
          'lucide:sun',
        ],
      },
    }),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
