// https://vike.dev/onRenderClient
import type { OnRenderClientAsync, PageContextClient } from "vike/types"
import { hydrate } from "kaioken/ssr/client"
import type { AppContext } from "kaioken"
import { getTitle } from "./utils"
import { App } from "./App"

declare global {
  interface Window {
    __appCtx: AppContext<{ pageContext: PageContextClient }> | undefined
  }
}

export const onRenderClient: OnRenderClientAsync = async (pageContext) => {
  const container = document.getElementById("page-root")!

  if (pageContext.isHydration || !window.__appCtx) {
    window.__appCtx = await hydrate(App, container, { pageContext })
    return
  }

  document.title = getTitle(pageContext)
  await window.__appCtx.setProps(() => ({ pageContext }))
}
