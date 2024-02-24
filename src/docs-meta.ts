export type DocItem = {
  title: string
  href: string
  pages?: { title: string; href: string }[]
  sections?: DocSectionLink[]
}

export type DocSectionLink = {
  title: string
  id: string
}

export const docMeta: DocItem[] = [
  {
    title: "Introduction",
    href: "/docs/introduction",
    sections: [
      {
        title: "About Kaioken",
        id: "about-kaioken",
      },
      {
        title: "Roadmap",
        id: "roadmap",
      },
    ],
  },
  {
    title: "Getting started",
    href: "/docs/getting-started",
    sections: [
      {
        title: "Start a new project",
        id: "start-a-new-project",
      },
      {
        title: "Add to an existing project",
        id: "add-to-an-existing-project",
      },
      {
        title: "Getting help",
        id: "getting-help",
      },
    ],
  },

  {
    title: "API",
    href: "/docs/api",
    pages: [
      {
        title: "Context",
        href: "/docs/api/context",
      },
      {
        title: "Memo",
        href: "/docs/api/memo",
      },
      {
        title: "Portal",
        href: "/docs/api/portal",
      },
      {
        title: "Router",
        href: "/docs/api/router",
      },
      {
        title: "Store",
        href: "/docs/api/store",
      },
      {
        title: "Transition",
        href: "/docs/api/transition",
      },
      {
        title: "Custom hooks",
        href: "/docs/api/custom-hooks",
      },
    ],
  },
  {
    title: "Hooks",
    href: "/docs/hooks",
    pages: [
      {
        title: "useCallback",
        href: "/docs/hooks/useCallback",
      },
      {
        title: "useContext",
        href: "/docs/hooks/useContext",
      },
      {
        title: "useEffect",
        href: "/docs/hooks/useEffect",
      },
      {
        title: "useFetch",
        href: "/docs/hooks/useFetch",
      },
      {
        title: "useMemo",
        href: "/docs/hooks/useMemo",
      },
      {
        title: "useModel",
        href: "/docs/hooks/useModel",
      },
      {
        title: "useOptimistic",
        href: "/docs/hooks/useOptimistic",
      },
      {
        title: "useReducer",
        href: "/docs/hooks/useReducer",
      },
      {
        title: "useRef",
        href: "/docs/hooks/useRef",
      },
      {
        title: "useState",
        href: "/docs/hooks/useState",
      },
    ],
  },
]
