import { siteCodeLang } from "$/state/langToggle"
import { useCallback, useRef } from "kaioken"

export function SiteLangToggle() {
  const handleClick = useCallback(() => {
    siteCodeLang.value = siteCodeLang.value === "js" ? "ts" : "js"
  }, [])
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const tx =
    siteCodeLang.value === "ts"
      ? btnRef.current?.getBoundingClientRect().width
      : 0
  return (
    <button
      ref={btnRef}
      className="relative flex items-end justify-end text-primary border-2 border-primary rounded p-1 w-7 h-7 text-xs leading-none font-extrabold overflow-hidden"
      onclick={handleClick}
    >
      <div
        style={{
          transform: `translateX(${tx}px)`,
        }}
        className={`transition absolute right-1 w-[200%] text-right`}
      >
        <span style="color: crimson; margin-right: 0.9375rem">TS</span>
        <span style="color: crimson">JS</span>
      </div>
    </button>
  )
}
