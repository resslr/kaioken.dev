import { LogoIcon } from "./icons/LogoIcon"
import { MenuIcon } from "./icons/MenuIcon"
import { GithubIcon } from "./icons/GithubIcon"
import { CommandKeyIcon } from "./icons/keys/CommandKeyIcon"
import { useNavDrawer } from "$/state/navDrawer"
import { SITE_LINKS } from "$/constants"
import { usePageContext } from "$/context/pageContext"
import { isLinkActive } from "$/utils"
import { CopyIcon } from "./icons/CopyIcon"
import { useCommandPallete } from "$/state/commandPallete"

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
            isLinkActive(link.href, urlPathname) ? (
              <a
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                className="text-sm text-dark dark:text-light"
              >
                {link.title}
              </a>
            ) : (
              <a
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                className="text-sm text-muted hover:text-dark dark:hover:text-light"
              >
                {link.title}
              </a>
            )
          )}
        </div>
      </div>
      <div className="flex flex-grow gap-4 items-center justify-end">
        <SearchButton />
        <a href="https://github.com/CrimsonChi/kaioken" target="_blank">
          <GithubIcon />
        </a>
      </div>
    </nav>
  )
}

function SearchButton() {
  const { setOpen } = useCommandPallete()
  return (
    <button
      ariaLabel="Search documentation"
      type="button"
      className="flex leading-4 justify-between items-center flex-grow text-left sm:flex-grow-0 min-w-40 px-4 py-2 pr-2 gap-4 rounded border bg-light hover:bg-light-highlight dark:bg-stone-950 hover:dark:bg-stone-900"
      onclick={(e) => setOpen(true, e)}
    >
      <span className="text-xs sm:hidden">Search...</span>
      <span className="hidden sm:flex">
        <span className="text-xs">Search documentation...</span>
      </span>
      <span className="hidden sm:flex bg-dark dark:bg-light  text-light dark:opacity-85 dark:text-dark px-1 rounded gap-xs items-center text-[11px] font-mono">
        <CommandKeyIcon width={12} />
        <b>K</b>
      </span>
    </button>
  )
}
