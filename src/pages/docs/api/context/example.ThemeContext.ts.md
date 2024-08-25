```ts
import { createContext } from "kaioken"

export const ThemeContext = createContext({
  value: "light" as "light" | "dark",
  toggle: () => {},
})
```
