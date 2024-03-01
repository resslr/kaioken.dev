import { InlineCodeBlock } from "$/components/atoms/InlineCodeBlock"
import { CodeBlock } from "$/components/CodeBlock"

export function InteractingWithTheStore() {
  return (
    <ol>
      <li>
        <b>
          <InlineCodeBlock>useStore</InlineCodeBlock> hook
        </b>
        : A <b>Store</b> object is callable within a component and returns the
        current store value and methods.
        <ul>
          <li>
            You can provide a function to{" "}
            <InlineCodeBlock>useStore</InlineCodeBlock> and return a computed
            value, resulting in the component only updating when the result of
            that computation changes.
          </li>
        </ul>
        <div className="not-prose">
          <CodeBlock
            lang="jsx"
            code={`\
function Counter() {
  const { value, increment, decrement } = useCountStore()

  return (
    <div>
      <p>Count: {value}</p>
      <button onclick={increment}>Increment</button>
      <button onclick={decrement}>Decrement</button>
    </div>
  )
}
`}
          />
        </div>
      </li>
      <li>
        <b>Direct Access</b>: You can also access the store's methods and state
        directly using the returned object from createStore:
        <div className="not-prose">
          <CodeBlock
            lang="ts"
            code={`\
useCountStore.getState() // Returns the current state
useCountStore.setState((state) => state + 1) // Updates the state
useCountStore.methods.increment() // Calls the method defined in the method factory

/**
 * Subscribe to the store, providing a function to run whenever state changes. 
 * Subscribing in this way returns a function to unsubscribe.
 */
const unsub = useCountStore.subscribe((newValue) => console.log(newValue))
`}
          />
        </div>
      </li>
    </ol>
  )
}
