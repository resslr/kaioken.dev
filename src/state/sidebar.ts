import { createStore } from "kaioken"

export const useSidebar = createStore({ open: false }, (set) => ({
  toggle: () => set((prev) => ({ open: !prev.open })),
  setOpen: (open: boolean) => set({ open }),
}))
