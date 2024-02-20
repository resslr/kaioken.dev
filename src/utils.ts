export function isLinkActive(href: string, urlPath: string) {
  return href === urlPath || urlPath.startsWith(href + "/")
}
