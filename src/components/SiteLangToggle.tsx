import { siteCodeLang } from "$/state/langToggle"
import { useCallback } from "kaioken"

export function SiteLangToggle() {
  const handleClick = useCallback(() => {
    siteCodeLang.value = siteCodeLang.value === "js" ? "ts" : "js"
  }, [])
  return (
    <button
      className="relative flex items-end justify-end text-primary border-2 border-primary rounded p-1 w-7 h-7 text-xs leading-none font-extrabold overflow-hidden"
      onclick={handleClick}
    >
      <div
        className={`transition absolute right-1 ${siteCodeLang.value === "ts" ? "translate-x-[1.325rem]" : ""}`}
      >
        <span style="color: crimson; margin-right: 0.5rem">TS</span>
        <span style="color: crimson">JS</span>
      </div>
    </button>
  )
}
