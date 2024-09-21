import { usePageContext } from "$/context/pageContext"
import { CodeSandbox } from "./CodeSandbox"

export function Page() {
  const ctx = usePageContext()
  ctx.routeParams
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
      <div className="flex">
        <div className="w-1/3">Tutorial</div>
        <CodeSandbox files={files} className="flex-grow w-2/3" />
      </div>
    </div>
  )
}
