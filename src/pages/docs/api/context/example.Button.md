```tsx
import { useTheme } from "./ThemeContext"

export function Button() {
  const { theme, toggle } = useTheme()
  const backgroundColor = computed(() =>
    theme.value === "light" ? "black" : "white"
  )

  return () => (
    <button onclick={toggle} style={{ backgroundColor }}>
      Toggle theme
    </button>
  )
}
```
