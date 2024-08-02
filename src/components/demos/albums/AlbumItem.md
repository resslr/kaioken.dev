```jsx
function Album({ album }) {
  return (
    <div>
      <Thumbnail album={album} />
      <a href={album.url}>
        <h4>{album.title}</h4>
        <span>{album.artist}</span>
      </a>
      <LikeButton album={album} />
    </div>
  )
}
```
