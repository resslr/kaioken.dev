import { usePageContext } from "$/context/pageContext"
import { useRef, useEffect, ElementProps, useState } from "kaioken"
import Prism from "prismjs"
import { prismJsx } from "$/prism-jsx"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-json"
import "prismjs/components/prism-bash"
import "prismjs/themes/prism-tomorrow.min.css"
import { CopyIcon } from "./icons/CopyIcon"

let initialized = false
if (!initialized) {
  prismJsx(Prism)
  initialized = true
}

type Lang = "ts" | "jsx" | "json" | "bash"

function createHtml(code: string, lang: Lang) {
  switch (lang) {
    case "ts":
      return Prism.highlight(code, Prism.languages.typescript, "typescript")
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
  lang,
  className = "",
  copy = false,
}: {
  code: string
  lang: Lang
  className?: string
  copy?: boolean
}) {
  const { isClient } = usePageContext()
  const [copied, setCopied] = useState(false)
  const copyInterval = useRef(-1)
  const eleRef = useRef<HTMLElement>(null)
  const html = isClient ? "" : createHtml(code, lang)

  useEffect(() => {
    if (!eleRef.current) return
    if (isClient) {
      eleRef.current.innerHTML = createHtml(code, lang)
      if (copyInterval.current !== -1) {
        window.clearInterval(copyInterval.current!)
        copyInterval.current = -1
      }
    }
  }, [code])

  useEffect(() => {
    if (copied) {
      copyInterval.current = window.setTimeout(() => setCopied(false), 1500)
      return () => {
        if (copyInterval.current !== -1) {
          clearTimeout(copyInterval.current!)
          copyInterval.current = -1
        }
      }
    }
  }, [copied])

  function copyToClipboard() {
    if (copied) return
    navigator.clipboard.writeText(code)
    setCopied(true)
  }

  return (
    <div className="relative">
      <pre
        className={`p-4 h-full bg-[#1a1a1a] dark:bg-[#0a0a0a] text-light overflow-x-auto text-xs sm:text-sm ${className}`}
      >
        <code ref={eleRef}>{isClient ? "" : html}</code>
      </pre>
      {copy && (
        <div className="absolute top-0 right-0 p-2">
          <div className="flex justify-end">
            <button
              className="text-light opacity-50 hover:opacity-100"
              onclick={copyToClipboard}
            >
              <CopyIcon />
            </button>
          </div>
          {copied && (
            <span className="text-light text-xs p-1 bg-black">
              Copied to clipboard!
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export function CodeBlockHeader({ children, ...props }: ElementProps<"span">) {
  return (
    <span
      className="text-neutral-400 text-sm px-2 py-1 ml-2 rounded-t bg-stone-800"
      {...props}
    >
      {children}
    </span>
  )
}
