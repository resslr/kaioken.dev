```js
import { createContext, useContext } from "kiru"

export const ThemeContext = createContext(null)

export const useTheme = () => useContext(ThemeContext)
```
