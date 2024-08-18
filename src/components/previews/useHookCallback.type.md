```ts
type HookCallbackState<T> = {
  hook: Hook<T>
  isInit: boolean
  update: () => void
  queueEffect: (callback: Function, opts?: { immediate?: boolean }) => void
  vNode: Kaioken.VNode
}
type HookCallback<T, U> = (state: HookCallbackState<T>) => U
```
