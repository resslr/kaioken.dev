```js
const onSubmit = (e: Event) => {
  e.preventDefault()
  todos.value.push(input.value)
  input.value = ""

  todos.notify() // emits a signal change
}
```
