export type DocItem = {
  title: string
  href?: string
  pages?: DocPageLink[]
  sections?: DocSectionLink[]
}

type DocPageLink = {
  title: string
  href: string
  disabled?: boolean
  keywords?: string[]
}

type DocSectionLink = {
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
    pages: [
      {
        title: "Context",
        href: "/docs/api/context",
        keywords: ["createContext"],
      },
      {
        title: "Memo",
        href: "/docs/api/memo",
        disabled: true,
      },
      {
        title: "Portal",
        href: "/docs/api/portal",
        disabled: true,
      },
      {
        title: "Router",
        href: "/docs/api/router",
        disabled: true,
        keywords: ["Route"],
      },
      {
        title: "Store",
        href: "/docs/api/store",
        disabled: true,
        keywords: ["createStore"],
      },
      {
        title: "Transition",
        href: "/docs/api/transition",
        disabled: true,
      },
    ],
  },
  {
    title: "Hooks",
    pages: [
      {
        title: "Dependency arrays",
        href: "/docs/hooks/dependency-arrays",
      },
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
        disabled: true,
      },
      {
        title: "useMemo",
        href: "/docs/hooks/useMemo",
      },
      {
        title: "useModel",
        href: "/docs/hooks/useModel",
        disabled: true,
      },
      {
        title: "useOptimistic",
        href: "/docs/hooks/useOptimistic",
        disabled: true,
      },
      {
        title: "useReducer",
        href: "/docs/hooks/useReducer",
        disabled: true,
      },
      {
        title: "useRef",
        href: "/docs/hooks/useRef",
        disabled: true,
      },
      {
        title: "useState",
        href: "/docs/hooks/useState",
        disabled: true,
      },
    ],
  },
]
