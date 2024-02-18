import { useRef, type TransitionState, useEffect } from "kaioken"
import { Backdrop } from "./Backdrop"

type DrawerProps = {
  state: TransitionState
  close: () => void
  side: "bottom" | "left" | "right"
  children?: JSX.Element[]
}

export function Drawer({ state, close, children, side }: DrawerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  if (state == "exited") return null
  const opacity = state === "entered" ? "1" : "0"
  const translateX =
    side === "right"
      ? state === "entered"
        ? 0
        : 100
      : side === "left"
        ? state === "entered"
          ? 0
          : -100
        : 0
  const translateY = side === "bottom" ? (state === "entered" ? 0 : 100) : 0

  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress)
    return () => window.removeEventListener("keyup", handleKeyPress)
  }, [])

  function handleKeyPress(e: KeyboardEvent) {
    if (e.key === "Escape") {
      e.preventDefault()
      close()
    }
  }

  return (
    <Backdrop
      ref={wrapperRef}
      onclick={(e) => e.target === wrapperRef.current && close()}
      style={{ opacity }}
    >
      <div
        className="drawer-content"
        data-side={side}
        style={{ transform: `translate(${translateX}%, ${translateY}%)` }}
      >
        {children}
      </div>
    </Backdrop>
  )
}
