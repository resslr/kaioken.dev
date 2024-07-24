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
        <ul className="py-4 ">
          <li className="mb-5">
            You can provide a function to <InlineCodeBlock>useStore</InlineCodeBlock>to return a computed value.
            This will cause the component to only update when the result of that computation changes:
            <div className="not-prose">
              <CodeBlock
                lang="jsx"
                code={`\
function TodoItem({ id }) {
  const { value: todo, toggle } = useTodoStore((state) => {
    return state.find(item => item.id === id)
  })
  // ...
}
`}
              />
            </div>
          </li>
          <li>
            You can also provide a second function, allowing you to specify how
            the result of your computation should be compared:
            <div className="not-prose mb-2">
              <CodeBlock
                lang="jsx"
                code={`\
function TodoList() {
  const { value: items } = useTodoStore(null, (prev, next) => {
    return prev.length === next.length
  })

  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} id={item.id} />
      ))}
    </ul>
  )
}
`}
              />
            </div>
            In the above example, the TodoList component will only update when the number of items in the store changes.
            We can also provide <InlineCodeBlock>null</InlineCodeBlock> as the first argument, which means the comparison will use the current state.
          </li>
        </ul>
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
