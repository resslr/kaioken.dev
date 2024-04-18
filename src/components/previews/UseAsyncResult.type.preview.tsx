import { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const UseAsyncResultTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
type UseAsyncResult<T> =
  | [null, true, null] // initial
  | [T, false, null] // success
  | [null, false, Error] // failure
`}
    />
  ),
  link: {
    text: "UseAsyncResult",
    href: "/docs/hooks/useAsync",
  },
} satisfies CodePreviewData
