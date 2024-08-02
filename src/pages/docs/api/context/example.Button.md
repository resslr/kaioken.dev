```tsx
import { useContext } from "kaioken"
import { ThemeContext } from "./themeContext"

function Button() {
  const { toggle } = useContext(ThemeContext)

  return <button onclick={toggle}>Toggle theme</button>
}
```
