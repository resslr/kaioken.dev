import { createStore } from "kaioken"

export const useTabStore = createStore("themeContext.ts", (set) => ({
  setSelected: (value: string) => set(value),
}))
