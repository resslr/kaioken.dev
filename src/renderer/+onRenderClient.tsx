// https://vike.dev/onRenderClient
import type { OnRenderClientAsync } from "vike/types"
import { hydrate } from "kaioken/ssr"
import type { AppContext } from "kaioken"
import { getTitle } from "./utils"
import { App } from "./App"

let appInstance: AppContext | undefined

export const onRenderClient: OnRenderClientAsync = async (pageContext) => {
  const container = document.getElementById("page-root")!

  if (pageContext.isHydration || !appInstance) {
    appInstance = await hydrate(App, container, { pageContext })
    return
  }

  document.title = getTitle(pageContext)
  const appNode = appInstance.rootNode!.child!
  appNode!.props.pageContext = pageContext
  appInstance.requestUpdate(appNode)
}
