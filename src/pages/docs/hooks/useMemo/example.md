```jsx
import { useMemo } from "kaioken"
import { fibonacci } from "./fibonacci"

function App({ n }) {
  // Memoize the result of an expensive computation
  const memoizedResult = useMemo(() => {
    // Expensive computation based on the prop
    return fibonacci(n)
  }, [n]) // Re-run when 'n' changes

  return (
    <div>
      <p>Result: {memoizedResult}</p>
    </div>
  )
}
```
