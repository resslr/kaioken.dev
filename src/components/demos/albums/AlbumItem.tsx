import { LikeButton } from "$/components/LikeButton"
import { PlayIcon } from "$/components/icons/PlayIcon"
import { useState } from "kaioken"

export function AlbumItem({ album }: { album: Album; key: string }) {
  const [liked, setLiked] = useState(false)
  return (
    <div className="flex items-center gap-4">
      <button role="none" className="p-2 border-2 border-light rounded">
        <PlayIcon />
      </button>
      <div className="flex-grow">
        <h4 className="font-bold">{album.title}</h4>
        <span className="text-muted">{album.artist}</span>
      </div>
      <LikeButton liked={liked} toggleLiked={() => setLiked((prev) => !prev)} />
    </div>
  )
}
