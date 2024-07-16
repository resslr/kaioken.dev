import { CodeBlock } from "$/components/CodeBlock"
import { PackageManagerSelector } from "./PackageManagerSelector"
import { packageManager } from "./packageManagerStore"

export function CliCode() {
  let str = ""
  switch (packageManager.value) {
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
