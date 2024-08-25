```jsx
import { useModel } from "kaioken"

function App() {
  const [inputRef, inputValue, setInputValue] = useModel("")

  const handleClick = () => {
    setInputValue("")
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onclick={handleClick}>Reset Input</button>
    </div>
  )
}
```
