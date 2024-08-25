```tsx
import { useState, useEffect } from "kaioken"

function App({ initialValue }: { initialValue: number }) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    // This effect will run once when the component is mounted, and whenever 'value' changes
    console.log("Value has changed:", value)
  }, [value])

  return (
    <div>
      <p>Value: {value}</p>
      <button onclick={() => setValue((prev) => prev + 1)}>Increment</button>
    </div>
  )
}
```
