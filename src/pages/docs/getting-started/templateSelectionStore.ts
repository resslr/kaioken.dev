import { createStore } from "kaioken"

type TemplateSelection = "CSR" | "SSR"
export const useTemplateSelection = createStore(
  "CSR" as TemplateSelection,
  (set) => ({
    setSelected: (value: TemplateSelection) => set(value),
  })
)
