import { children, type TransitionState } from "kaioken"

type PreviewProps = {
  state: TransitionState
}

export function Preview({ state }: PreviewProps) {
  if (state == "exited") return null
  const opacity = state === "entered" ? "1" : "0"
  const scale = state === "entered" ? 1 : 0.85
  const translateY = state === "entered" ? -50 : -65

  return (
    <div
      className={`preview-content p-4`}
      style={{
        opacity,
        transform: `translate(-50%, ${translateY}%) scale(${scale})`,
      }}
    >
      {children()}
    </div>
  )
}
