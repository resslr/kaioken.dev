import { siteCodeLang } from "$/state/langToggle"
import { useCallback } from "kaioken"

export function SiteLangToggle() {
  const handleClick = useCallback(() => {
    siteCodeLang.value = siteCodeLang.value === "js" ? "ts" : "js"
  }, [])

  const isJs = siteCodeLang.value === "js"

  return (
    <button
      className="group relative flex items-center justify-between bg-neutral-900 border border-stone-800 rounded-md px-3 py-1.5 hover:bg-neutral-800 hover:border-neutral-500 transition-all duration-200 text-sm font-bold min-w-14"
      onclick={handleClick}
      title={`Switch to ${isJs ? 'TypeScript' : 'JavaScript'}`}
      aria-label={`Switch to ${isJs ? 'TypeScript' : 'JavaScript'}`}
    >
      <span className={`${isJs ? 'text-[#F7DF1F]' : 'text-[#197ABF]'} transition-colors duration-200`}>
        {isJs ? 'JS' : 'TS'}
      </span>

      <div className="absolute -top-1 -right-2 w-6 h-6 rounded-md bg-neutral-800 border border-stone-800 transition-opacity duration-200 opacity-50 group-hover:opacity-100">
      <span className="transition-colors duration-200 absolute inset-0 flex items-center justify-center text-[10px] font-bold">
        {isJs ? 'TS' : 'JS'}
      </span>
    </div>

    </button>
  )
}