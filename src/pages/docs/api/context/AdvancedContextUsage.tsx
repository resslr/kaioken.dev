import { CodeBlock } from "$/components/CodeBlock"
import { TabGroup } from "$/components/TabGroup"
import { createStore } from "kaioken"

const useTabStore = createStore("themeContext.ts", (set) => ({
  setSelected: (value: string) => set(value),
}))

export function AdvancedContextUsage() {
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

export const ThemeContext = createContext("light")
export const ThemeDispatcherContext = createContext(null)

export function themeStateReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return state === "light" ? "dark" : "light"
    // ...
  }
}`}
    />
  )
}

function ThemeContextProviderBlock() {
  return (
    <CodeBlock
      lang="jsx"
      code={`\
import { useReducer } from "kaioken"
import { ThemeContext, ThemeDispatcherContext } from "./themeContext"

function ThemeContextProvider({ children })
  const [theme, dispatch] = useReducer(themeStateReducer, "light")

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatcherContext.Provider value={dispatch}>
        {children}
      </ThemeDispatcherContext.Provider>
    </ThemeContext.Provider>
  )
`}
    />
  )
}

function ButtonBlock() {
  return (
    <CodeBlock
      lang="jsx"
      code={`\
import { useContext } from "kaioken"
import { ThemeDispatcherContext } from "./themeContext"

function Button() {
  const dispatch = useContext(ThemeDispatcherContext)

  return (
    <button onclick={() => dispatch({ type: "toggle" })}>
      Toggle theme
    </button>
  )
}`}
    />
  )
}
