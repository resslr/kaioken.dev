// https://vike.dev/onRenderClient
import type { OnRenderClientAsync } from "vike/types"
import { hydrate } from "kaioken/ssr"
import type { AppContext } from "kaioken"
import { getTitle } from "./utils"
import { App } from "./App"

let appInstance: AppContext | undefined

export const onRenderClient: OnRenderClientAsync = async (pageContext) => {
  const container = document.getElementById("page-root")!

  const isInitialLoad = pageContext.isHydration

  if (isInitialLoad || !appInstance) {
    appInstance = await hydrate(App, container, { pageContext })
    return
  }

  document.title = getTitle(pageContext)
  appInstance.rootNode!.child!.props.pageContext = pageContext
  appInstance.requestUpdate(appInstance.rootNode!)
}
