import { Transition } from "kaioken"
import { Drawer } from "./dialog/Drawer"
import { useNavDrawer } from "$/state/navDrawer"

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
            Drawer Content
          </Drawer>
        )
      }
    />
  )
}
