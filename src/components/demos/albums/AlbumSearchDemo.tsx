import { SearchIcon } from "$/components/icons/SearchIcon"
import { useModel } from "kaioken"
import { CodeDemo } from "../CodeDemo"
import { DemoComponentWrapper } from "../DemoComponentWrapper"
import { AlbumItem } from "./AlbumItem"

const code = `function SearchableAlbumList({ albums }) {  
  const [searchText, setSearchText] = useState('')
  const filteredAlbums = filterAlbums(albums, searchText)
  
  return (
    <>
      <SearchInput
        value={searchText}
        onChange={setSearchText} />
      <AlbumList
        albums={filteredAlbums}
        emptyMessage={\`No matches for "\${searchText}"\`} />
    </>
  )
}
`

export function AlbumSearchDemo() {
  const [inputRef, inputValue] = useModel<HTMLInputElement, string>("")
  const albums: Album[] = [
    {
      id: 1,
      title: "First album",
      artist: "Album artist",
      url: "#",
    },
    {
      id: 2,
      title: "Second album",
      artist: "Album artist",
      url: "#",
    },
    {
      id: 3,
      title: "Third album",
      artist: "Album artist",
      url: "#",
    },
    {
      id: 4,
      title: "Fourth album",
      artist: "Album artist",
      url: "#",
    },
    {
      id: 5,
      title: "Fifth album",
      artist: "Album artist",
      url: "#",
    },
  ]

  const filteredAlbums = albums.filter(
    (a) => a.title.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  )

  return (
    <CodeDemo filename="SearchableAlbumList.jsx" code={code}>
      <DemoComponentWrapper className="max-w-[340px] overflow-hidden p-0">
        <div className="h-[240px] overflow-auto p-4">
          <h2 className="mb-4 font-bold text-lg">Albums</h2>
          <div className="sticky top-0 bg-stone-700 mb-4 flex rounded z-10 shadow-md shadow-stone-900">
            <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              ref={inputRef}
              type="text"
              className="bg-transparent pl-8 w-full text-sm py-1 "
              placeholder="Search"
            />
          </div>
          <section className="flex flex-col gap-4">
            <p className="text-muted">
              {filteredAlbums.length > 0
                ? `${filteredAlbums.length} matches`
                : `No matches for "${inputValue}"`}
            </p>
            {filteredAlbums.map((album) => (
              <AlbumItem album={album} />
            ))}
          </section>
        </div>
      </DemoComponentWrapper>
    </CodeDemo>
  )
}
