import { CodeBlock } from "../CodeBlock"

export function ContextDemo() {
  return (
    <CodeBlock
      lang="jsx"
      code={`\
import { createContext, useState } from "kaioken"

const ThemeContext = createContext("light")

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}`}
    />
  )
}
