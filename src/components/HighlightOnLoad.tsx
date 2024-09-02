import { useEffect, useRef } from "kaioken"

export function HighlightOnLoad({
  children,
  hash,
}: {
  children: JSX.Children
  hash: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef(-1)
  useEffect(() => {
    if (!ref.current) return
    if (window.location.hash === hash) {
      ref.current.classList.add("highlight")
      if (timeoutRef.current !== -1) {
        window.clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(
        () => ref.current?.classList.remove("highlight"),
        1000
      )
    }
  }, [globalThis.window?.location.hash])
  return (
    <div className="docs-section" ref={ref}>
      {children}
    </div>
  )
}
