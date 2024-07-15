import { TabGroup } from "$/components/TabGroup"
import { CodeBlock } from "$/components/CodeBlock"
import { createStore, useModel } from "kaioken"

const useSelectionStore = createStore("CSR", (set) => ({
  setSelected: (value: string) => set(value),
}))

export function GitCloneCode() {
  const { value: selectedItem, setSelected } = useSelectionStore()
  const [ref, txt] = useModel("")
  return (
    <div>
      <div className="flex gap-2">
        <TabGroup
          value={selectedItem}
          onSelect={setSelected}
          items={["CSR", "SSR"]}
        />
        <input
          ref={ref}
          placeholder="my-app"
          className="px-2 my-1 text-sm w-[140px] xs:w-auto bg-dark border rounded"
        />
      </div>
      <CodeBlock
        lang="bash"
        copy
        className="rounded-b-lg rounded-tr-lg"
        code={`mkdir ${txt || "my-app"}
cd ${txt || "my-app"}
git clone https://github.com/CrimsonChi/kaioken-${selectedItem.toLowerCase()}-template.git .
rm -rf .git
pnpm i
pnpm dev`}
      />
    </div>
  )
}
