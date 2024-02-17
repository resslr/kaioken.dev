import { ElementProps } from "kaioken"
import { LogoIcon } from "./icons/LogoIcon"
import { MenuIcon } from "./icons/MenuIcon"
import { GithubIcon } from "./icons/GithubIcon"
import { CommandKeyIcon } from "./icons/keys/CommandKeyIcon"

export function Navbar() {
  return (
    <nav className="flex items-center border-b sm:justify-between gap-4 px-4 py-3 w-full sticky top-0 backdrop-blur-[6px]">
      <div className="flex gap-4 items-center">
        <LogoIcon className="hidden sm:block" />
        <button type="button" className="sm:hidden">
          <MenuIcon />
        </button>
        <div className="hidden sm:flex gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/counter">Counter</NavLink>
        </div>
      </div>
      <div className="flex flex-grow gap-4 items-center justify-end">
        <SearchButton />
        <div>
          <a
            // className="block rounded-full bg-white hover:bg-gray-50 dark:bg-gray-950 hover:dark:bg-gray-900"
            href="https://github.com/CrimsonChi/kaioken"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </nav>
  )
}

function SearchButton() {
  return (
    <button
      type="button"
      className="flex justify-between items-center flex-grow text-left sm:flex-grow-0 min-w-40 px-4 py-2 pr-2 gap-4 rounded border bg-white hover:bg-gray-50 dark:bg-gray-950 hover:dark:bg-gray-900"
    >
      <span className="text-xs sm:hidden">Search...</span>
      <span className="hidden sm:flex">
        <span className="text-xs">Search documentation...</span>
      </span>
      <span className="hidden sm:flex bg-[crimson] text-white dark:opacity-85 dark:text-black px-1 rounded gap-xs items-center text-[11px] font-mono">
        <CommandKeyIcon width={12} />
        <b>K</b>
      </span>
    </button>
  )
}

function NavLink({ href, children }: ElementProps<"a">) {
  return (
    <a href={href} className="text-sm underline">
      {children}
    </a>
  )
}
