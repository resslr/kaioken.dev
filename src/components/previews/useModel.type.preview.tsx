import type { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const useModelTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
type BindableElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
<T extends BindableElement, U extends string | number | boolean>(initialValue): [Ref<T>, U, (newValue:U) => void]`}
    />
  ),
  link: {
    text: "useModel",
    href: "/docs/hooks/useModel",
  },
} satisfies CodePreviewData
