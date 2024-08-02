import { TabGroup } from "$/components/TabGroup"
import { selectedTab } from "./store"

export function ExampleFileSelector() {
  return (
    <TabGroup
      items={["App.tsx", "index.html"]}
      onSelect={(value) => (selectedTab.value = value)}
      value={selectedTab.value}
    />
  )
}
