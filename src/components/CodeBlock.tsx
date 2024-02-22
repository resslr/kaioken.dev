import { usePageContext } from "$/context/pageContext"
import { useRef, useEffect } from "kaioken"
import Prism from "prismjs"
import { prismJsx } from "$/prism-jsx"
import "prismjs/themes/prism-tomorrow.min.css"

let initialized = false
if (!initialized) {
  prismJsx(Prism)
  initialized = true
}

export function CodeBlock({
  code,
  className = "",
}: {
  code: string
  className?: string
}) {
  const { isClient } = usePageContext()
  const eleRef = useRef<HTMLElement>(null)
  const html = Prism.highlight(code, Prism.languages.jsx, "jsx")

  useEffect(() => {
    if (!eleRef.current) return
    if (isClient) {
      eleRef.current.innerHTML = html
    }
  }, [])

  return (
    <pre
      className={`p-4 h-full bg-[#1a1a1a] dark:bg-[#0a0a0a] text-light overflow-x-auto text-xs sm:text-sm ${className}`}
    >
      <code ref={eleRef}>{isClient ? "" : html}</code>
    </pre>
  )
}
