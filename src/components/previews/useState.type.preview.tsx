import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const useStateTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
<T>(value:T | (() => T)) => [T, T | ((prev:T) => T)]
`}
    />
  ),
  link: {
    text: "useState",
    href: "/docs/hooks/useState",
  },
} satisfies CodePreviewData
