import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const contextPreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
type Context<T> = {
  // Component that acts as a reactive boundary for the context
  Provider: ({ value }: { value: T }) => JSX.Element
  // ...
}`}
    />
  ),
  link: {
    text: "Context",
    href: "/docs/api/context",
  },
} satisfies CodePreviewData
