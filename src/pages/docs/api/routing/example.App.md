```jsx
import { Router, Route } from "kaioken"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { UserList } from "./UserList"
import { UserPage } from "./UserPage"

export function App() {
  return (
    <Router>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:userId" element={<UserPage />} />
    </Router>
  )
}
```
