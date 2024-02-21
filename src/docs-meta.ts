type DocPage = {
  title: string
  href: string
  sections: { title: string; id: string }[]
}

export const sections: DocPage[] = [
  {
    title: "Introduction",
    href: "/docs/introduction",
    sections: [
      {
        title: "Why Kaioken?",
        id: "why-kaioken",
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
        title: "Getting help",
        id: "getting-help",
      },
    ],
  },
  {
    title: "Hooks",
    href: "/docs/hooks",
    sections: [
      {
        title: "Custom hooks",
        id: "custom-hooks",
      },
      {
        title: "useCallback",
        id: "useCallback",
      },
      {
        title: "useContext",
        id: "useContext",
      },
      {
        title: "useEffect",
        id: "useEffect",
      },
      {
        title: "useFetch",
        id: "useFetch",
      },
      {
        title: "useMemo",
        id: "useMemo",
      },
      {
        title: "useModel",
        id: "useModel",
      },
      {
        title: "useOptimistic",
        id: "useOptimistic",
      },
      {
        title: "useReducer",
        id: "useReducer",
      },
      {
        title: "useRef",
        id: "useRef",
      },
      {
        title: "useState",
        id: "useState",
      },
    ],
  },
]
