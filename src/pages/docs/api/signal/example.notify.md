```js
const onSubmit = (e) => {
  e.preventDefault()
  todos.value.push(input.value)
  input.value = ""

  todos.notify() // emits a signal change
}
```
