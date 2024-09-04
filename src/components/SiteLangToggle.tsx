import { siteCodeLang } from "$/state/langToggle"
import { Transition, useCallback, useRef } from "kaioken"

export function SiteLangToggle() {
  const handleClick = useCallback(() => {
    siteCodeLang.value = siteCodeLang.value === "js" ? "ts" : "js"
  }, [])
  const jsTxtRef = useRef<HTMLSpanElement>(null)

  return (
    <button
      className="relative flex items-end justify-end text-primary border-2 border-primary rounded p-1 w-7 h-7 text-xs leading-none font-extrabold overflow-hidden"
      onclick={handleClick}
    >
      <Transition
        in={siteCodeLang.value === "ts"}
        duration={50}
        element={(state) => {
          const domRect = jsTxtRef.current?.getBoundingClientRect()
          const tx = state === "entered" ? domRect?.width || 13 : -20
          return (
            <span
              className="transition-transform"
              style={{ transform: `translateX(${tx}px)`, color: "crimson" }}
            >
              TS
            </span>
          )
        }}
      />
      <Transition
        in={siteCodeLang.value === "js"}
        initialState="entered"
        duration={50}
        element={(state) => {
          const tx = state === "entered" ? 0 : 20
          return (
            <span
              ref={jsTxtRef}
              className="transition-transform"
              style={{ transform: `translateX(${tx}px)`, color: "crimson" }}
            >
              JS
            </span>
          )
        }}
      />
    </button>
  )
}
