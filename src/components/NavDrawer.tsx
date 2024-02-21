import { Transition } from "kaioken"
import { Drawer } from "./dialog/Drawer"
import { useNavDrawer } from "$/state/navDrawer"
import { SITE_LINKS } from "$/constants"
import { LogoIcon } from "./icons/LogoIcon"
import { usePageContext } from "$/context/pageContext"
import { SidebarContent } from "./DocsLinks"
import { isLinkActive } from "$/utils"

export function NavDrawer() {
  const {
    value: { open },
    setOpen,
  } = useNavDrawer()
  const { urlPathname } = usePageContext()

  return (
    <Transition
      in={open}
      timings={[70, 250, 250, 250]}
      element={(state) =>
        state === "exited" ? null : (
          <Drawer side="left" state={state} close={() => setOpen(false)}>
            <div className="p-4 text-lg">
              <div className="flex gap-1 mb-5">
                <a href="/" className="flex gap-2 items-center">
                  <LogoIcon width={24} height={24} />
                  <span className="text-primary font-medium">Kaioken</span>
                </a>
              </div>
              <div className="flex flex-col gap-2 pl-9">
                {SITE_LINKS.map((link) => (
                  <a
                    href={link.href}
                    className={`text-base font-medium ${isLinkActive(link.href, urlPathname) ? "" : "text-muted"}`}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
              {urlPathname.startsWith("/docs") && (
                <>
                  <hr className="my-6 mx-9" />
                  <div className="flex flex-col gap-2 text-base xs:text-base pl-9">
                    <SidebarContent />
                  </div>
                </>
              )}
            </div>
          </Drawer>
        )
      }
    />
  )
}
