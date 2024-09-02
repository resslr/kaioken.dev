```tsx
import { useState, useAsync } from "kaioken"

function App() {
  const [productId, setProductId] = useState(1)

  // Use useAsync to run an async function whenever the productId changes
  const { data, loading, error, invalidate } = useAsync<Product>(async () => {
    return (await fetch(`https://dummyjson.com/products/${productId}`)).json()
  }, [productId])

  return (
    <div>
      <button onclick={() => setProductId((prev) => prev + 1)}>Next</button>
      {data ? (
        <ProductCard product={data} invalidate={invalidate} />
      ) : loading ? (
        <Spinner />
      ) : (
        <p>{error.message}</p>
      )}
    </div>
  )
}
```
