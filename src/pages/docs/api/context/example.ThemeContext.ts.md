```ts
import { createContext, signal } from "kiru"

const defaultValue = signal<"light" | "dark">("light")
export const ThemeContext = createContext({
  value: defaultValue,
  toggle: () => {},
})
```
