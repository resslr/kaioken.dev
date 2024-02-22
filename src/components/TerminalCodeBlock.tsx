import { usePageContext } from "$/context/pageContext"
import { useEffect, useRef } from "kaioken"
import Prism from "prismjs"
import "prismjs/components/prism-bash"
import "prismjs/themes/prism-tomorrow.min.css"

export function TerminalCodeBlock({ code }: { code: string }) {
  const { isClient } = usePageContext()
  const eleRef = useRef<HTMLElement>(null)
  const html = Prism.highlight(code, Prism.languages.bash, "bash")

  useEffect(() => {
    if (!eleRef.current) return
    if (isClient) {
      eleRef.current.innerHTML = html
    }
  }, [])

  return (
    <pre className="p-4 bg-[#1a1a1a] dark:bg-[#0a0a0a] text-light overflow-x-auto text-xs sm:text-sm">
      <code ref={eleRef}>{isClient ? "" : html}</code>
    </pre>
  )
}
