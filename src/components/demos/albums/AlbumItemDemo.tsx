import { CodeDemo } from "../CodeDemo"
import { DemoComponentWrapper } from "../DemoComponentWrapper"
import { AlbumItem } from "./AlbumItem"
import AlbumItemCodeBlock from "./AlbumItem.md"

export function AlbumItemDemo() {
  return (
    <CodeDemo filename="Album.jsx" CodeBlock={AlbumItemCodeBlock}>
      <DemoComponentWrapper className="max-w-[340px]">
        <AlbumItem
          album={{
            id: "1",
            title: "Album title",
            artist: "Artist",
            url: "#",
          }}
        />
      </DemoComponentWrapper>
    </CodeDemo>
  )
}
