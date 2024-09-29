```jsx
import { useId } from "kaioken"

function App() {
  const id = useId()

  return (
    <div>
      <label htmlFor={id}>Enter your name:</label>
      <input id={id} type="text" />
    </div>
  )
}
```
