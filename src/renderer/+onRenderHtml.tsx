// Environment: server
import type { OnRenderHtmlAsync } from "vike/types"
import { dangerouslySkipEscape, escapeInject } from "vike/server"
import { renderToString } from "kaioken"
import { getDescription, getKeywords, getTitle } from "./utils"
import { App } from "./App"

export const onRenderHtml: OnRenderHtmlAsync = async (
  pageContext
): ReturnType<OnRenderHtmlAsync> => {
  const pageHtml = renderToString(App, { pageContext })
  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">
        <title>${getTitle(pageContext)}</title>
        <meta name="description" content="${getDescription(pageContext)}">
        <meta name="keywords" content="${getKeywords(pageContext).join(", ")}">
      </head>
      <body>
        <div id="page-root">${dangerouslySkipEscape(pageHtml)}</div>
        <div id="portal-root"></div>
      </body>
    </html>`
}
