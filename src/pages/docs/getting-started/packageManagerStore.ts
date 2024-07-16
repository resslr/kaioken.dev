import { createStore, signal } from "kaioken"

export const packageManagers = ["NPM", "PNPM", "Yarn", "Bun"] as const
type PackageManager = (typeof packageManagers)[number]

export const packageManager = signal<PackageManager>(packageManagers[0])
