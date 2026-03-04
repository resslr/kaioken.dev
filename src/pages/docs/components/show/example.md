```jsx
import { Show, signal } from "kiru"

function App() {
  const user = signal(null)

  const login = () => {
    user.value = { name: "Alice" }
  }

  const logout = () => {
    user.value = null
  }

  return () => (
    <div>
      <Show when={user} fallback={<button onclick={login}>Log in</button>}>
        {(currentUser) => (
          // ^ currentUser is type User
          <div>
            <p>Hello, {currentUser.name}</p>
            <button onclick={logout}>Log out</button>
          </div>
        )}
      </Show>
    </div>
  )
}
```
