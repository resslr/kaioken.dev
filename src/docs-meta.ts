export type DocItem = {
  title: string
  href?: string
  pages?: DocPageLink[]
  sections?: DocSectionLink[]
}

export type DocPageLink = {
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
      },
      {
        title: "Portal",
        href: "/docs/api/portal",
      },
      {
        title: "Routing",
        href: "/docs/api/routing",
        keywords: ["router", "route", "link", "navigate"],
      },
      {
        title: "Store",
        href: "/docs/api/store",
        keywords: ["createStore", "useStore", "MethodFactory"],
      },
      {
        title: "Transition",
        href: "/docs/api/transition",
      },
    ],
  },
  {
    title: "Hooks",
    pages: [
      {
        title: "useAsync",
        href: "/docs/hooks/useAsync",
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
        title: "useMemo",
        href: "/docs/hooks/useMemo",
      },
      {
        title: "useModel",
        href: "/docs/hooks/useModel",
        keywords: ["Ref"],
      },
      {
        title: "useReducer",
        href: "/docs/hooks/useReducer",
      },
      {
        title: "useRef",
        href: "/docs/hooks/useRef",
        keywords: ["Ref"],
      },
      {
        title: "useState",
        href: "/docs/hooks/useState",
      },
      {
        title: "Dependency arrays",
        href: "/docs/hooks/dependency-arrays",
      },
      {
        title: "Custom hooks",
        href: "/docs/hooks/custom-hooks",
        keywords: ["useHook"],
      },
    ],
  },
]
