type InferReturn<T extends Function> = T extends () => infer R ? R : never

type Matcher<T, R> = {
  with<V extends T, U extends Function>(
    matchValue: V,
    handler: U
  ): Matcher<T, R | InferReturn<U>>
  else<U extends Function>(handler: U): R | InferReturn<U>
}

/**
 * Creates a pattern matching expression for a given value
 */
export function match<const T>(value: T) {
  const handlers: [unknown, Function][] = []
  const matcher: Matcher<T, never> = {
    with<V extends T, U extends Function>(matchValue: V, handler: U) {
      return handlers.push([matchValue, handler]), matcher
    },
    else<U extends Function>(handler: U): never | InferReturn<U> {
      for (const [pattern, handler] of handlers) {
        if (value === pattern) return handler()
      }
      return handler()
    },
  }
  return matcher
}
