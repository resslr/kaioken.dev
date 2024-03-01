import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const storeTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
type Store<T, U extends MethodFactory<T>> = {
  (fn?: (state: T) => unknown): { value: T } & ReturnType<U>
  getState: () => T
  setState: (setter: T | ((prev:T) => T)) => void
  methods: ReturnType<U>
  subscribe: (fn: (value: T) => void) => () => void
}
`}
    />
  ),
  link: {
    text: "Store",
    href: "/docs/api/store",
  },
} satisfies CodePreviewData
