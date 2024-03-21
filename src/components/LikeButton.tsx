import { HeartIcon } from "./icons/HeartIcon"
import "./LikeButton.css"

export function LikeButton({
  liked,
  toggleLiked,
}: {
  liked: boolean
  toggleLiked: () => void
}) {
  return (
    <button
      data-liked={liked}
      role="none"
      className="like-button flex transition transform active:scale-90 active:opacity-75"
      onclick={toggleLiked}
    >
      <HeartIcon />
    </button>
  )
}
