```jsx
import { ThemeContext } from "./ThemeContext"
import { Button } from "./Button"

function App() {
  const theme = signal("light")
  const toggle = () => {
    theme.value = theme.value === "light" ? "dark" : "light"
  }

  const themeState = { theme, toggle }

  return () => (
    <ThemeContext value={themeState}>
      <Button />
    </ThemeContext>
  )
}
```
