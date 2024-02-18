import { HeartIcon } from "$/components/icons/HeartIcon"
import { PlayIcon } from "$/components/icons/PlayIcon"
import { useState } from "kaioken"

export function AlbumItem({ album }: { album: Album }) {
  const [liked, setLiked] = useState(false)
  return (
    <div className="flex items-center gap-4">
      <button className="p-2 border-2 border-dark dark:border-light rounded">
        <PlayIcon />
      </button>
      <div className="flex-grow">
        <h4 className="font-bold">{album.title}</h4>
        <span className="text-muted">{album.artist}</span>
      </div>
      <button
        className="flex transition transform active:scale-90 active:opacity-75 active:bg-[#e11d48a]"
        onclick={() => setLiked((prev) => !prev)}
      >
        <HeartIcon
          className={`transition-colors ${liked ? "text-rose-600" : ""}`}
        />
      </button>
    </div>
  )
}
