import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const methodFactoryTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
type MethodFactory<T> = (
  setState: (setter: T | ((prev:T) => T)) => void,
  getState: () => T
) => Record<string, (...args: any[]) => void>
`}
    />
  ),
  link: {
    text: "MethodFactory",
    href: "/docs/api/store",
  },
} satisfies CodePreviewData
