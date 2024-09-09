import { LogoIcon } from "./icons/LogoIcon"
import { MenuIcon } from "./icons/MenuIcon"
import { GithubIcon } from "./icons/GithubIcon"
import { CommandKeyIcon } from "./icons/keys/CommandKeyIcon"
import { useNavDrawer } from "$/state/navDrawer"
import { SITE_LINKS } from "$/constants"
import { usePageContext } from "$/context/pageContext"
import { isLinkActive } from "$/utils"
import { useCommandPallete } from "$/state/commandPallete"
import { DiscordIcon } from "./icons/DiscordIcon"
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon"
import { SiteLangToggle } from "./SiteLangToggle"
import { useCallback, useMemo } from "kaioken"

export function Navbar() {
  const { setOpen } = useNavDrawer()
  const { urlPathname } = usePageContext()

  return (
    <nav className="flex items-center sm:justify-between gap-4 py-3 w-full">
      <div className="flex gap-4 items-center">
        <button
          ariaLabel="Show menu"
          onclick={(e) => setOpen(true, e)}
          type="button"
          className="sm:hidden"
        >
          <MenuIcon />
        </button>

        <a href="/" className="hidden sm:flex gap-1">
          <LogoIcon />
          <span className="text-primary font-medium hidden sm:block">
            Kaioken
          </span>
        </a>
        <div className="hidden sm:flex gap-2">
          {SITE_LINKS.map((link) =>
            isLinkActive(link.activePath ?? link.href, urlPathname) ? (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                className="text-sm text-light"
              >
                {link.title}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                className="inline-flex items-center gap-xs text-sm text-muted hover:text-light"
              >
                {link.title}
                {link.external && <ExternalLinkIcon />}
              </a>
            )
          )}
        </div>
      </div>
      <div className="flex flex-grow gap-4 items-center justify-end">
        <SiteLangToggle />
        <SearchButton />
        <div className="flex gap-3 items-center">
          <a href="https://github.com/CrimsonChi/kaioken" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://discord.gg/yspvgXegvs" target="_blank">
            <DiscordIcon />
          </a>
        </div>
      </div>
    </nav>
  )
}

function SearchButton() {
  const { setOpen } = useCommandPallete()
  const isMac = useMemo(() => {
    return (
      "window" in globalThis &&
      navigator.userAgent.toUpperCase().indexOf("MAC OS") !== -1
    )
  }, [])
  const handleClick = useCallback((e: MouseEvent) => setOpen(true, e), [])
  return (
    <button
      ariaLabel="Search documentation"
      type="button"
      className="flex leading-4 justify-between items-center flex-grow text-left sm:flex-grow-0 min-w-36 px-4 py-2 pr-2 gap-4 rounded border bg-stone-950 hover:bg-stone-900"
      onclick={handleClick}
    >
      <span className="text-xs sm:hidden text-muted">Search...</span>
      <span className="hidden sm:flex text-muted">
        <span className="text-xs">Search documentation...</span>
      </span>
      <span className="hidden sm:block items-center bg-light opacity-85 text-dark px-1 rounded text-[11px] font-mono">
        {isMac ? "⌘" : "Ctrl"} <b>K</b>
      </span>
    </button>
  )
}
