```jsx
import { useCallback, useState } from "kaioken"

function App() {
  const [count, setCount] = useState(0)

  // Without useCallback, handleIncrement will be recreated on every render.
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  return (
    <div>
      <button onclick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  )
}
```
