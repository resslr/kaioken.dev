import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const TransitionStateTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
type TransitionState = "entering" | "entered" | "exiting" | "exited"
`}
    />
  ),
  link: {
    text: "Transition States",
    href: "/docs/api/transition",
  },
} satisfies CodePreviewData
