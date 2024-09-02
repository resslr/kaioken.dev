```jsx
import { navigate } from "kaioken"

export function LoginPage() {
  const user = useUser() // some custom hook that gets auth state
  if (user) {
    return navigate("/")
  }

  return <LoginForm />
}
```
