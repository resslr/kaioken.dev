import { TabGroup } from "$/components/TabGroup"
import { CodeBlock } from "$/components/CodeBlock"
import { useModel } from "kaioken"
import { packageManager } from "./packageManagerStore"
import { useTemplateSelection } from "./templateSelectionStore"

export function GitCloneCode() {
  const { value: selectedItem, setSelected } = useTemplateSelection()
  const [ref, txt] = useModel("")

  const pkgManagerRunPref =
    ["npm", "yarn"].indexOf(packageManager.value.toLocaleLowerCase()) > -1
      ? " run"
      : ""
  return (
    <div>
      <div className="flex gap-2">
        <TabGroup
          value={selectedItem}
          onSelect={(value) => setSelected(value as typeof selectedItem)}
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
${packageManager.value.toLowerCase()} install
${packageManager.value.toLowerCase()}${pkgManagerRunPref} dev`}
      />
    </div>
  )
}
