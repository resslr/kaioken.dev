import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const routeTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
(props: { 
  path: string; 
  element: JSX.Element 
  fallthrough?: boolean; 
}) => JSX.Element
`}
    />
  ),
  link: {
    text: "Route",
    href: "/docs/api/routing#route",
  },
} satisfies CodePreviewData
