```jsx
import { memo } from "kaioken"

const MemoizedComponent = memo(({ value }) => {
  // Component logic here
  return <div>{value}</div>
})
```

### Specifying a custom `compare` function

```jsx
import { memo } from "kaioken"

const MemoizedComponent = memo(
  ({ value }) => {
    // Component logic here
    return <div>{value}</div>
  },
  (prevProps, nextProps) => prevProps.nested.value === nextProps.nested.value
)
```
