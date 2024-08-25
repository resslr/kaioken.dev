```tsx
import { useCallback, useState } from "kaioken"

function App() {
  const [count, setCount] = useState(0)

  // Without useCallback, handleIncrement will be recreated on every render.
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  return (
    <div>
      <ChildComponent onIncrement={handleIncrement} />
      <p>Count: {count}</p>
    </div>
  )
}

function ChildComponent({ onIncrement }: { onIncrement: () => void }) {
  return <button onclick={onIncrement}>Increment</button>
}
```
