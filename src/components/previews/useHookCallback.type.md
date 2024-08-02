```ts
type HookCallbackState<T> = {
  hook: Hook<T>
  oldHook?: Hook<T>
  update: () => void
  queueEffect: (fn: () => void) => void
  vNode: Kaioken.VNode
}
type HookCallback<T, U> = (state: HookCallbackState<T>) => U
```
