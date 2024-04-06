import { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const useHookTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
function useHook<T, U>(hookName: string, hookData: Hook<T>, callback: HookCallback<T, U>): U
`}
    />
  ),
  link: {
    text: "useHook",
    href: "/docs/hooks/custom-hooks",
  },
} satisfies CodePreviewData
