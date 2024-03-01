import { createStore } from "kaioken"

export const useTabStore = createStore("store.ts", (set) => ({
  setSelected: (value: string) => set(value),
}))
