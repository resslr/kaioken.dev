import { signal } from "kiru"

export const selectedTab = signal<
  "App" | "LoginPage" | "UserList" | "UserPage"
>("App")
