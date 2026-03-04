```js
import { createContext, signal } from "kiru"

const defaultValue = signal("light")
export const ThemeContext = createContext({
  value: defaultValue,
  toggle: () => {},
})
```
