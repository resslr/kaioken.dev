```jsx
function SearchableAlbumList({ albums }: SearchableAlbumListProps) {
  const [searchText, setSearchText] = useState("")
  const filteredAlbums = filterAlbums(albums, searchText)

  return (
    <>
      <SearchInput value={searchText} onChange={setSearchText} />
      <AlbumList
        albums={filteredAlbums}
        emptyMessage={`No matches for "${searchText}"`}
      />
    </>
  )
}
```
