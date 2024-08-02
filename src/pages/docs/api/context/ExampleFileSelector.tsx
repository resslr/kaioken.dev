import { TabGroup } from "$/components/TabGroup"
import { selectedTab } from "./store"

export function ExampleFileSelector() {
  return (
    <TabGroup
      items={["ThemeContext.ts", "ThemeContextProvider.tsx", "Button.tsx"]}
      onSelect={(value) => (selectedTab.value = value)}
      value={selectedTab.value}
    />
  )
}
