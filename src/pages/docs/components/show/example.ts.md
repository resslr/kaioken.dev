```tsx
import { Show, signal } from "kiru"

type User = {
  name: string
}

function App() {
  const user = signal<User | null>(null)

  const login = () => {
    user.value = { name: "Alice" }
  }

  const logout = () => {
    user.value = null
  }

  return () => (
    <Show when={user} fallback={<button onclick={login}>Log in</button>}>
      {(currentUser) => (
        // ^ currentUser is type User
        <div>
          <p>Hello, {currentUser.name}</p>
          <button onclick={logout}>Log out</button>
        </div>
      )}
    </Show>
  )
}
```
