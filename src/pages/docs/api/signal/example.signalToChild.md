```jsx
const Child = ({ element }) => {
  console.log("Child render")
  return element()
}

const Parent = () => {
  const count = signal(0);
  const increment = () => count.value++
  console.log("Parent render")
  
  return (
    <Child
      element={() => <button onclick={increment}>{count}</button>}
    />
  )
}
```