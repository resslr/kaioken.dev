```jsx
import { For, signal, computed } from "kiru"

function App() {
  const items = signal([0, 1, 2, 3, 4])
  const doubledItems = computed(() => items.value.map((i) => i * 2))

  const addItem = () => {
    items.value = [...items.value, items.value.length]
  }

  const clearItems = () => {
    items.value = []
  }

  return () => (
    <div>
      <button onclick={addItem}>Add item</button>
      <button onclick={clearItems}>Clear</button>

      <ul>
        <For each={doubledItems} fallback={<i>No items</i>}>
          {(item) => <li>{item}</li>}
        </For>
      </ul>
    </div>
  )
}
```

