import { usePageContext } from "$/context/pageContext"
import { prismJsx } from "$/prism-jsx"
import { useRef, useEffect } from "kaioken"
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
    <div className="grid md:grid-cols-5">
      <div className="flex flex-col md:col-span-3 md:rounded-2xl bg-stone-800 text-light overflow-hidden z-10 shadow-[#0003] dark:shadow-[#0006] shadow-lg ">
        <h4 className="text-sm px-4 py-2 text-stone-200 opacity-80">
          {filename}
        </h4>
        <CodeBlock code={code} />
      </div>
      <div className="md:col-span-2 md:rounded-e-2xl md:my-8 px-4 py-8 my-0 bg-theme-gradient dark:bg-theme-gradient-dark flex items-center justify-center shadow-[#0003] dark:shadow-[#0006] shadow-lg">
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
    <pre className="p-4 h-full bg-[#1a1a1a] dark:bg-[#0a0a0a] text-light overflow-x-auto text-xs sm:text-sm">
      <code ref={eleRef}>{isClient ? "" : html}</code>
    </pre>
  )
}
