import { TabGroup } from "$/components/TabGroup"
import { TerminalCodeBlock } from "$/components/TerminalCodeBlock"
import { createStore, useState } from "kaioken"

const useSelectionStore = createStore("CSR", (set) => ({
  setSelected: (value: string) => set(value),
}))

export function GitCloneCode() {
  const { value: selectedItem, setSelected } = useSelectionStore()
  return (
    <div>
      <TabGroup
        value={selectedItem}
        onSelect={setSelected}
        items={["CSR", "SSR"]}
      />
      {selectedItem === "CSR" ? (
        <TerminalCodeBlock
          code={`mkdir my-app
cd my-app
git clone https://github.com/CrimsonChi/kaioken-csr-template.git .
rm -r .git `}
        />
      ) : (
        <TerminalCodeBlock
          code={`mkdir my-app
cd my-app
git clone https://github.com/CrimsonChi/kaioken-ssr-template.git .
rm -r .git `}
        />
      )}
    </div>
  )
}
