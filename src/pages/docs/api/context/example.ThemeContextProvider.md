```jsx
import { useState } from "kaioken"
import { ThemeContext } from "./themeContext"

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider
      value={{
        value: theme,
        toggle: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
```
