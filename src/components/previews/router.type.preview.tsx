import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const routerTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
(props: { basePath?: string }) => JSX.Element
`}
    />
  ),
  link: {
    text: "Router",
    href: "/docs/api/routing#router",
  },
} satisfies CodePreviewData
