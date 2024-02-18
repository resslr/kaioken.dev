import { CodeDemo } from "../CodeDemo"
import { DemoComponentWrapper } from "../DemoComponentWrapper"
import { AlbumItem } from "./AlbumItem"

const code = `function AlbumList({ albums }) {  
  let title = '0 albums';
  if (albums.length === 1) title = '1 album';
  if (albums.length > 1) title = \`\${albums.length} albums\`

  return (
    <section>
      <h2>{title}</h2>
      {albums.map(album =>
        <Album album={album} />
      )}
    </section>
  );
}
`

export function AlbumListDemo() {
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
  ]

  return (
    <CodeDemo filename="AlbumList.jsx" code={code}>
      <DemoComponentWrapper className="max-w-[340px]">
        <h2 className="mb-4 font-bold text-lg">3 albums</h2>
        <section className="flex flex-col gap-4">
          {albums.map((album) => (
            <AlbumItem album={album} />
          ))}
        </section>
      </DemoComponentWrapper>
    </CodeDemo>
  )
}
