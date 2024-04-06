import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const contextTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
type Context<T> = {
  // Component that acts as a 'provider' for the context, initialized with it's own value. 
  // Multiple can exist for the same context within an application.
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
