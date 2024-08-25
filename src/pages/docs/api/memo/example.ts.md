```tsx
import { memo } from "kaioken"

const MyComponent = memo(({ value }: { value: number }) => {
  // Component logic here
  return <div>{value}</div>
})
```

### Specifying a custom `compare` function

```tsx
import { memo } from "kaioken"

const MyComponent = memo(
  ({ value }: { value: number }) => {
    // Component logic here
    return <div>{value}</div>
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value
)
```
