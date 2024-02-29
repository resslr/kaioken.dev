import { CodeBlock } from "$/components/CodeBlock"
import { TabGroup } from "$/components/TabGroup"
import { useTabStore } from "./store"

export function PortalExample() {
  const { value, setSelected } = useTabStore()

  return (
    <div>
      <div>
        <TabGroup
          items={["App.tsx", "index.html"]}
          onSelect={setSelected}
          value={value}
        />
      </div>
      {value === "App.tsx" ? <AppBlock /> : <HtmlBlock />}
    </div>
  )
}

function AppBlock() {
  return (
    <CodeBlock
      lang="jsx"
      code={`\
import { Portal } from "kaioken"

function App() {
  return (
    <div>
      <h1>Hello world!</div>
      <Portal container={document.getElementById("portal-root")}>
        <h2>Hello from the portal!</h2>
      </Portal>
    </div>
  )
}
`}
    />
  )
}

function HtmlBlock() {
  return (
    <CodeBlock
      lang="html"
      code={`\
<body>
  <div id="app"></div>
  <div id="portal-root"></div>
</body>
`}
    />
  )
}
