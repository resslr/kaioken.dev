import { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const UseAsyncResultTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
type UseAsyncResult<T> = (
  | /** loading*/ {
      data: null
      loading: true
      error: null
    }
  | /** loaded */ {
      data: T
      loading: false
      error: null
    }
  | /** error */ {
      data: null
      loading: false
      error: UseAsyncError
    }
) & {
  invalidate: (forceUpdate?: boolean) => void
}
`}
    />
  ),
  link: {
    text: "UseAsyncResult",
    href: "/docs/hooks/useAsync",
  },
} satisfies CodePreviewData
