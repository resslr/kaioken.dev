import { useState } from "kaioken"
import { HeartIcon } from "./icons/HeartIcon"
import "./LikeButton.css"

export function LikeButton() {
  const [liked, setLiked] = useState(false)
  return (
    <button
      data-liked={liked}
      role="none"
      className="like-button flex transition transform active:scale-90 active:opacity-75"
      onclick={() => setLiked((prev) => !prev)}
    >
      <HeartIcon />
    </button>
  )
}
