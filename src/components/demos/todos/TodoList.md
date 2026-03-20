```tsx
function App() {
  const todos = signal([]),
    inputText = signal("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
      id: crypto.randomUUID(),
      text: inputText.value,
    }

    todos.value = [...todos.value, todo]
    inputText.value = ""
  }

  console.log("Hello from Kiru! This component never rerenders 😉")

  return () => (
    <>
      <form onsubmit={handleSubmit}>
        <input bind:value={inputText} />
        <button type="submit">Add</button>
      </form>
      <ul>
        <For each={todos} fallback={<i>No todos</i>}>
          {(item) => <TodoItem todo={item} />}
        </For>
      </ul>
    </>
  )
}
```
