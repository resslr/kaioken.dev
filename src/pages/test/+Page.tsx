import { CodeSandbox } from "./CodeSandbox"

export function Page() {
  const files = {
    ["App.tsx"]: `
import { Counter } from "./Counter"

export default function App() {
  return <Counter />
}
`,
    ["Counter.tsx"]: `
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
