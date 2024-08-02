```jsx
function AlbumList({ albums }) {
  let title = "0 albums"
  if (albums.length === 1) title = "1 album"
  if (albums.length > 1) title = `${albums.length} albums`

  return (
    <section>
      <h2>{title}</h2>
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </section>
  )
}
```
