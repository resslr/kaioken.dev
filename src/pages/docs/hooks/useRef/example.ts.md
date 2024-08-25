```tsx
import { useRef } from "kaioken"

function MyComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null) // Create a ref for the input element

  const handleClick = () => {
    inputRef.current?.focus() // Access and focus the input element using the ref
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onclick={handleClick}>Focus Input</button>
    </div>
  )
}
```
