```ts
import { createContext, signal } from "kiru"

interface ThemeContextValue {
  value: Kiru.Signal<"light" | "dark">
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextValue>(null!)

export const useTheme = () => useContext(ThemeContext)
```
