import { CodePreviewData } from "$/types"
import { CodeBlock } from "../CodeBlock"

export const useHookCallbackTypePreview = {
  element: () => (
    <CodeBlock
      lang="ts"
      code={`\
type HookCallbackState<T> = {
  hook: Hook<T>
  oldHook?: Hook<T>
  update: () => void
  queueEffect: (fn: () => void) => void
  vNode: Kaioken.VNode
}
type HookCallback<T, U> = (state: HookCallbackState<T>) => U
`}
    />
  ),
  link: {
    text: "Callback",
    href: "/docs/hooks/custom-hooks",
  },
} satisfies CodePreviewData
