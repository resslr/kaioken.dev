import type { RouteSync } from "vike/types"

export const route: RouteSync = (pageContext): ReturnType<RouteSync> => {
  const parts = pageContext.urlPathname.split("/")
  console.log("route", pageContext.urlPathname, parts)
  if (parts[1] !== "tutorial") {
    return false
  } else {
    if (!!parts[2]) {
      return {
        routeParams: {
          id: parts[2],
        },
      }
    }
    return true
  }
}
