import { usePageContext } from "$/context/pageContext"
import { prismJsx } from "$/prism-jsx"
import { useRef, useEffect, ElementProps } from "kaioken"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"

let initialized = false
if (!initialized) {
  prismJsx(Prism)
  initialized = true
}

export function CodeDemo({
  filename,
  code,
  children,
}: {
  filename: string
  code: string
  children?: JSX.Element
}) {
  return (
    <div className="grid sm:grid-cols-5">
      <div className="bg-stone-800 sm:col-span-3 text-white sm:rounded-2xl overflow-hidden z-10 shadow-[#0003] dark:shadow-[#0006] shadow-lg ">
        <h4 className="text-sm px-4 py-2 text-stone-200 ">{filename}</h4>
        <CodeBlock code={code} />
      </div>
      <div className="px-4 py-6 my-0 sm:my-8 bg-theme-gradient dark:bg-theme-gradient-dark sm:col-span-2 sm:rounded-e-2xl flex items-center justify-center shadow-[#0003] dark:shadow-[#0006] shadow-lg">
        {children}
      </div>
    </div>
  )
}

function CodeBlock({ code }: { code: string }) {
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
    <pre className="p-4 bg-[#1a1a1a] dark:bg-[#0a0a0a] text-white overflow-x-auto">
      <code ref={eleRef}>{isClient ? "" : html}</code>
    </pre>
  )
}
