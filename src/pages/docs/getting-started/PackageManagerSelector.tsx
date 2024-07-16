import { TabGroup } from "$/components/TabGroup"
import { packageManagers, usePackageManager } from "./packageManagerStore"

export function PackageManagerSelector() {
  const { value, set } = usePackageManager()
  return (
    <TabGroup
      items={[...packageManagers]}
      value={value}
      onSelect={(v) => set(v as any)}
    />
  )
}
