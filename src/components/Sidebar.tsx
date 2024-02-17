import { Transition } from "kaioken"
import { Drawer } from "./dialog/Drawer"
import { useSidebar } from "$/state/sidebar"

export function Sidebar() {
  const {
    value: { open },
    setOpen,
  } = useSidebar()
  return (
    <Transition
      in={open}
      timings={[40, 250, 250, 250]}
      element={(state) =>
        state === "exited" ? null : (
          <Drawer side="left" state={state} close={() => setOpen(false)}>
            Drawer Content
          </Drawer>
        )
      }
    />
  )
}
