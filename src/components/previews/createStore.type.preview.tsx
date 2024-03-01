import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const createStoreTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
<T, U extends MethodFactory<T>>(value:T, methodFactory: U): Store<T, U>
`}
    />
  ),
  link: {
    text: "createStore",
    href: "/docs/api/store",
  },
} satisfies CodePreviewData
