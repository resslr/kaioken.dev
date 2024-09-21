import { redirect } from "vike/abort"
import type { RouteSync } from "vike/types"

export const route: RouteSync = (pageContext): ReturnType<RouteSync> => {
  const parts = pageContext.urlPathname.split("/")
  if (parts[1] !== "tutorial") {
    return false
  } else {
    if (!!parts[2]) {
      return {
        routeParams: {
          tutorialId: parts[2],
        },
      }
    }
    throw redirect("/tutorial/introduction")
  }
}
