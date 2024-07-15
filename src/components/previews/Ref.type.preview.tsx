import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const refTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
type Ref<T> = {
  current: T
}`}
    />
  ),
  link: {
    text: "Ref",
    href: "/docs/hooks/useRef",
  },
} satisfies CodePreviewData
