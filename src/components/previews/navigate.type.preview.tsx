import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const navigateTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
(path:string) => void
`}
    />
  ),
  link: {
    text: "Navigate",
    href: "/docs/api/routing#navigate",
  },
} satisfies CodePreviewData
