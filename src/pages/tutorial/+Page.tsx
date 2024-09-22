import { redirect } from "vike/abort"

export function Page() {
  throw redirect("/tutorial/introduction")
  return null
}
