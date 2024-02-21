type Section = {
  title: string
  href: string
  items: { title: string; id: string }[]
}

export const sections: Section[] = [
  {
    title: "Introduction",
    href: "/docs/introduction",
    items: [
      {
        title: "Why Kaioken?",
        id: "why-kaioken",
      },
    ],
  },
  {
    title: "Getting started",
    href: "/docs/getting-started",
    items: [],
  },
]
