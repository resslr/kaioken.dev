import { createStore } from "kaioken"

export const useTabStore = createStore("App.tsx", (set) => ({
  setSelected: (value: string) => set(value),
}))
