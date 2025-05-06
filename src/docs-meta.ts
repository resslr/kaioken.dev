export type DocItem = {
  title: string
  href?: string
  pages?: DocPageLink[]
  sections?: DocSectionLink[]
}

type IsNew = {
  isNew: boolean
  since: string
}

export type DocPageLink = {
  title: string
  href: string
  disabled?: boolean
  keywords?: string[]
  isNew?: IsNew
  sections?: DocSectionLink[]
}

type DocSectionLink = {
  title: string
  id: string
  isNew?: IsNew
}

const NEW_API_DURATION = 30 * 24 * 60 * 60 * 1000 // 30 days
const now = Date.now()

const isNew = (strDate: string) =>
  now < new Date(strDate).getTime() + NEW_API_DURATION

const API_RELEASE_DATES: Record<string, IsNew> = {
  swr: {
    isNew: isNew("2025-05-01"),
    since: "0.38.0",
  },
  form: {
    isNew: isNew("2025-05-01"),
    since: "0.38.0",
  },
  element_bindings: {
    isNew: isNew("2025-05-05"),
    since: "0.38.2",
  },
  sig_for: {
    isNew: isNew("2025-05-06"),
    since: "0.38.4",
  },
  sig_derive: {
    isNew: isNew("2025-05-06"),
    since: "0.38.4",
  },
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
      {
        title: "Ecosystem",
        id: "ecosystem",
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
        title: "Form",
        href: "/docs/api/form",
        keywords: ["useForm"],
        isNew: API_RELEASE_DATES.form,
      },
      {
        title: "Lazy",
        href: "/docs/api/lazy",
        keywords: ["code-splitting"],
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
        keywords: ["Router", "Route", "Link", "navigate", "useRouter"],
      },
      {
        title: "Signal",
        href: "/docs/api/signal",
        keywords: [
          "state",
          "computed",
          "effect",
          "two way binding",
          "For",
          "Derive",
        ],
        sections: [
          {
            id: "general-usage",
            title: "General Usage",
          },
          {
            id: "computed-signals",
            title: "Computed",
          },
          {
            id: "signal-effects",
            title: "Watch",
          },
          {
            id: "usage-in-components",
            title: "In Components",
          },
          {
            id: "two-way-binding",
            title: "Two Way Binding",
            isNew: API_RELEASE_DATES.element_bindings,
          },
          {
            id: "for-component",
            title: "For",
            isNew: API_RELEASE_DATES.sig_for,
          },
          {
            id: "derive-component",
            title: "Derive",
            isNew: API_RELEASE_DATES.sig_derive,
          },
        ],
      },
      {
        title: "Store",
        href: "/docs/api/store",
        keywords: ["createStore", "useStore", "MethodFactory", "state"],
      },
      {
        title: "SWR",
        href: "/docs/api/swr",
        keywords: ["swr", "useSWR", "fetcher", "mutate", "revalidate", "cache"],
        isNew: API_RELEASE_DATES.swr,
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
        title: "useEffectEvent",
        href: "/docs/hooks/useEffectEvent",
      },
      {
        title: "useId",
        href: "/docs/hooks/useId",
      },
      {
        title: "useLayoutEffect",
        href: "/docs/hooks/useLayoutEffect",
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
        title: "useSyncExternalStore",
        href: "/docs/hooks/useSyncExternalStore",
        keywords: ["state", "global state"],
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
