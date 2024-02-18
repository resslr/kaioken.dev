import { CodeDemo } from "../CodeDemo"
import { DemoComponentWrapper } from "../DemoComponentWrapper"
import { AlbumItem } from "./AlbumItem"

const code = `function Album({ album }) {
  return (
    <div>
      <Thumbnail album={album} />
      <a href={album.url}>
        <h4>{album.title}</h4>
        <span>{album.artist}</span>
      </a>
      <LikeButton album={album} />
    </div>
  );
}
`

export function AlbumItemDemo() {
  return (
    <CodeDemo filename="Album.jsx" code={code}>
      <DemoComponentWrapper className="max-w-[340px]">
        <AlbumItem
          album={{
            id: 1,
            title: "Album title",
            artist: "Artist",
            url: "#",
          }}
        />
      </DemoComponentWrapper>
    </CodeDemo>
  )
}
