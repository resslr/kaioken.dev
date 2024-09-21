import { CodeSandbox } from "./CodeSandbox"

export function Page() {
  const files = {
    ["App.jsx"]: `
import { Counter } from "./Counter"

export default function App() {
  return <Counter />
}
`,
    ["Counter.jsx"]: `
import {useState} from "kaioken"

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onclick={() => setCount(prev => prev + 1)}>
      Click me! {count}
    </button>
  )
}
`,
  }
  return (
    <div className="mt-[var(--navbar-height)]">
      <CodeSandbox files={files} />
    </div>
  )
}
