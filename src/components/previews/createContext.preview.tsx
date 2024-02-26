import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const createContextPreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
import { createContext } from "kaioken"

const ThemeContext = createContext("light")
`}
    />
  ),
  link: {
    text: "createContext",
    href: "/docs/api/context",
  },
} satisfies CodePreviewData
