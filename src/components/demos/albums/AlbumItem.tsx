import { LikeButton } from "$/components/LikeButton"
import { PlayIcon } from "$/components/icons/PlayIcon"

export function AlbumItem({ album }: { album: Album }) {
  return (
    <div className="flex items-center gap-4">
      <button role="none" className="p-2 border-2 border-light rounded">
        <PlayIcon />
      </button>
      <div className="flex-grow">
        <h4 className="font-bold">{album.title}</h4>
        <span className="text-muted">{album.artist}</span>
      </div>
      <LikeButton />
    </div>
  )
}
