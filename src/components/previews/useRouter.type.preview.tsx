import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const useRouterTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`() => { 
  params: Record<string, string>
  query: Record<string, string>
}`}
    />
  ),
  link: {
    text: "useRouter",
    href: "/docs/api/routing",
  },
} satisfies CodePreviewData
