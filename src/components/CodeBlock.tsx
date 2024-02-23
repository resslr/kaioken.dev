import { usePageContext } from "$/context/pageContext"
import { useRef, useEffect } from "kaioken"
import Prism from "prismjs"
import { prismJsx } from "$/prism-jsx"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-json"
import "prismjs/components/prism-bash"
import "prismjs/themes/prism-tomorrow.min.css"

let initialized = false
if (!initialized) {
  prismJsx(Prism)
  initialized = true
}

type Lang = "ts" | "jsx" | "json" | "bash"

function createHtml(code: string, lang: Lang) {
  switch (lang) {
    case "ts":
    case "jsx":
      return Prism.highlight(code, Prism.languages.jsx, "jsx")
    case "json":
      return Prism.highlight(code, Prism.languages.json, "json")
    case "bash":
      return Prism.highlight(code, Prism.languages.bash, "bash")
  }
}

export function CodeBlock({
  code,
  className = "",
  lang = "ts",
}: {
  code: string
  className?: string
  lang?: Lang
}) {
  const { isClient } = usePageContext()
  const eleRef = useRef<HTMLElement>(null)
  const html = isClient ? "" : createHtml(code, lang)

  useEffect(() => {
    if (!eleRef.current) return
    if (isClient) {
      eleRef.current.innerHTML = createHtml(code, lang)
    }
  }, [code])

  return (
    <pre
      className={`p-4 h-full bg-[#1a1a1a] dark:bg-[#0a0a0a] text-light overflow-x-auto text-xs sm:text-sm ${className}`}
    >
      <code ref={eleRef}>{isClient ? "" : html}</code>
    </pre>
  )
}
