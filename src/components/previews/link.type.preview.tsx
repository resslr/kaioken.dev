import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const linkTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
(props: ElementProps<"a"> & { to: string }) => JSX.Element
`}
    />
  ),
  link: {
    text: "Link",
    href: "/docs/api/routing#link",
  },
} satisfies CodePreviewData
