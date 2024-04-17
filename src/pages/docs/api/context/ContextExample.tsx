import { CodeBlock } from "$/components/CodeBlock"
import { TabGroup } from "$/components/TabGroup"
import { useTabStore } from "./store"

export function ContextExample() {
  const { value, setSelected } = useTabStore()

  return (
    <div>
      <div>
        <TabGroup
          items={["themeContext.ts", "ThemeContextProvider.tsx", "Button.tsx"]}
          onSelect={setSelected}
          value={value}
        />
      </div>
      {value === "themeContext.ts" ? (
        <ThemeContextBlock />
      ) : value === "ThemeContextProvider.tsx" ? (
        <ThemeContextProviderBlock />
      ) : (
        <ButtonBlock />
      )}
    </div>
  )
}

function ThemeContextBlock() {
  return (
    <CodeBlock
      lang="ts"
      code={`\
import { createContext } from "kaioken"

export const ThemeContext = createContext({
  value: "light",
  toggle: () => {},
})`}
    />
  )
}

function ThemeContextProviderBlock() {
  return (
    <CodeBlock
      lang="jsx"
      code={`\
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
}`}
    />
  )
}

function ButtonBlock() {
  return (
    <CodeBlock
      lang="jsx"
      code={`\
import { useContext } from "kaioken"
import { ThemeContext } from "./themeContext"

function Button() {
  const { toggle } = useContext(ThemeContext)

  return (
    <button onclick={toggle}>
      Toggle theme
    </button>
  )
}`}
    />
  )
}
