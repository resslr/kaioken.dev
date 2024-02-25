import { useRef, type TransitionState, useEffect } from "kaioken"
import { Backdrop } from "./Backdrop"
import { trapFocus } from "$/utils"

type ModalProps = {
  state: TransitionState
  close: () => void
  children?: JSX.Element[]
  className?: string
}

export function Modal({ state, close, children, className = "" }: ModalProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  if (state == "exited") return null
  const opacity = state === "entered" ? "1" : "0"
  const scale = state === "entered" ? 1 : 0.85
  const translateY = state === "entered" ? -50 : -65

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  function handleKeyPress(e: KeyboardEvent) {
    const outerEl = wrapperRef.current
    if (state === "exited" || !outerEl) return
    if (e.key === "Escape") {
      e.preventDefault()
      return close()
    }
    trapFocus(outerEl, e)
  }

  return (
    <Backdrop
      ref={wrapperRef}
      onclick={(e) => e.target === wrapperRef.current && close()}
      style={{ opacity }}
    >
      <div
        className={`modal-content p-4 ${className}`}
        style={{
          transform: `translate(-50%, ${translateY}%) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </Backdrop>
  )
}
