// /pages/utils.js
// Environment: server & client

import type { PageContext } from "vike/types"

export { getTitle, getDescription, getKeywords }

function getTitle(pageContext: PageContext) {
  // The value exported by /pages/**/+title.js is available at pageContext.config.title
  const val = pageContext.config.title
  if (typeof val === "function") {
    return val(pageContext)
  }
  return val || "Kaioken"
}

function getDescription(pageContext: PageContext) {
  // The value exported by /pages/**/+title.js is available at pageContext.config.title
  const val = pageContext.config.description
  if (typeof val === "function") {
    return val(pageContext)
  }
  return val || "Default description"
}

function getKeywords(pageContext: PageContext) {
  // The value exported by /pages/**/+title.js is available at pageContext.config.title
  const val = pageContext.config.keywords
  if (typeof val === "function") {
    return val(pageContext)
  }
  return val || []
}
