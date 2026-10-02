interface NavigationItem {
  label: string
  href: string
}

interface SiteConfig {
  site: {
    name: string
    title: string
    description: string
    url: string
    language: string
  }
  links: {
    prosefly: string
    github: string
  }
  navigation: {
    primary: readonly NavigationItem[]
    footer: readonly NavigationItem[]
  }
  footer: {
    tagline: string
  }
}

const links = {
  prosefly: 'https://prosefly.dev/',
  github: 'https://github.com/prosefly/astro-template-aster',
} as const

export const config = {
  site: {
    name: 'Aster',
    title: 'Aster — Projects and writing, built with Astro',
    description:
      'A minimal Astro template for independent designers and developers, combining project case studies with long-form writing.',
    url: 'https://astro-template-aster.prosefly.dev/',
    language: 'en',
  },
  links,
  navigation: {
    primary: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'About', href: '/about/' },
    ],
    footer: [
      { label: 'Prosefly', href: links.prosefly },
      { label: 'GitHub', href: links.github },
    ],
  },
  footer: {
    tagline: 'Projects and writing, built with Astro.',
  },
} as const satisfies SiteConfig
