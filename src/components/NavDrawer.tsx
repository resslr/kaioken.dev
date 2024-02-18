import { Transition } from "kaioken"
import { Drawer } from "./dialog/Drawer"
import { useNavDrawer } from "$/state/navDrawer"
import { SITE_LINKS } from "$/constants"
import { NavLink } from "./atoms/NavLink"
import { LogoIcon } from "./icons/LogoIcon"
import { HomeLink } from "./atoms/HomeLink"

export function NavDrawer() {
  const {
    value: { open },
    setOpen,
  } = useNavDrawer()
  return (
    <Transition
      in={open}
      timings={[40, 250, 250, 250]}
      element={(state) =>
        state === "exited" ? null : (
          <Drawer side="left" state={state} close={() => setOpen(false)}>
            <div className="flex gap-1 mb-3">
              <HomeLink />
            </div>
            <div className="flex flex-col gap-2">
              {SITE_LINKS.map((link) => (
                <NavLink href={link.href}>{link.title}</NavLink>
              ))}
            </div>
          </Drawer>
        )
      }
    />
  )
}
