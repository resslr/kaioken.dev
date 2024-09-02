```jsx
import { ThemeContextProvider } from "./ThemeContextProvider"
import { Button } from "./Button"

export function App() {
  return (
    <ThemeContextProvider>
      <Button />
    </ThemeContextProvider>
  )
}
```
