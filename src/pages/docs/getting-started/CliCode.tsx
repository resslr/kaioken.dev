import { CodeBlock } from "$/components/CodeBlock"
import { TabGroup } from "$/components/TabGroup"
import { PackageManagerSelector } from "./PackageManagerSelector"
import { packageManagers, usePackageManager } from "./packageManagerStore"

export function CliCode() {
  const { value } = usePackageManager()
  let str = ""
  switch (value) {
    case "NPM":
      str = "npx create-kaioken@latest"
      break
    case "Yarn":
      str = "yarn create kaioken"
      break
    case "PNPM":
      str = "pnpm create kaioken"
      break
    case "Bun":
      str = "bun create kaioken"
      break
  }
  return (
    <div>
      <PackageManagerSelector />
      <CodeBlock lang="bash" code={`${str}`} />
    </div>
  )
}
