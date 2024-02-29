import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const memoPreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
<T>(...props:T) => (...props:T) => JSX.Element
`}
    />
  ),
  link: {
    text: "Memo",
    href: "/docs/api/memo",
  },
} satisfies CodePreviewData
