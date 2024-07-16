import { createStore } from "kaioken"

export const packageManagers = ["NPM", "PNPM", "Yarn", "Bun"] as const
type PackageManager = (typeof packageManagers)[number]

export const usePackageManager = createStore(
  packageManagers[0] as PackageManager,
  (set) => ({
    set,
  })
)
