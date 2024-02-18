import { useState } from "kaioken"
import { CodeDemo } from "./CodeDemo"
import { DemoComponentWrapper } from "./DemoComponentWrapper"

const counterCode = `const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onclick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </>
  );
}
`

export function CounterDemo() {
  return (
    <CodeDemo filename="Counter.tsx" code={counterCode}>
      <DemoComponentWrapper className="max-w-[300px]">
        <Counter />
      </DemoComponentWrapper>
    </CodeDemo>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex justify-between items-center">
      <p>Count: {count}</p>
      <button className="reset" onclick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
    </div>
  )
}
