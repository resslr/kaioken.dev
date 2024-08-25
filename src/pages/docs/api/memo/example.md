```jsx
import { memo } from "kaioken"

const MyComponent = memo(({ value }) => {
  // Component logic here
  return <div>{value}</div>
})
```

### Specifying a custom `compare` function

```jsx
import { memo } from "kaioken"

const MyComponent = memo(
  ({ value }) => {
    // Component logic here
    return <div>{value}</div>
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value
)
```
