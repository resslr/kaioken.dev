import { usePageContext } from "$/context/pageContext"
import { CodePreviewData } from "$/types"
import { isLinkActive } from "$/utils"
import { Portal, Transition, useRef, useState } from "kaioken"

export function CodePreview({
  data,
  text,
}: {
  data: CodePreviewData
  text?: string
}) {
  const { isClient, urlPathname } = usePageContext()
  const linkRef = useRef<any>(null)
  const linkBounds = useRef<DOMRect>(null)
  const [open, setOpen] = useState(false)
  const previewHovered = useRef(false)
  const hideTimeout = useRef(-1)

  function setLinkBounds(el: Element | null) {
    linkBounds.current = el?.getBoundingClientRect() || null
  }

  function clearHideTimeout() {
    if (hideTimeout.current !== -1) {
      window.clearTimeout(hideTimeout.current!)
      hideTimeout.current = -1
    }
  }

  function handleOpen() {
    clearHideTimeout()
    setLinkBounds(linkRef.current!)
    setOpen(true)
  }

  function handleClose() {
    if (previewHovered.current) return
    clearHideTimeout()
    hideTimeout.current = window.setTimeout(() => setOpen(false), 500)
  }

  return (
    <>
      {isLinkActive(data.link.href, urlPathname) ? (
        <button
          className="preview-button"
          ariaLabel="Show code preview"
          ref={linkRef}
          onfocus={handleOpen}
          onblur={handleClose}
          onpointerenter={handleOpen}
          onpointerleave={handleClose}
        >
          {text ?? data.link.text}
        </button>
      ) : (
        <a
          href={data.link.href}
          ref={linkRef}
          onfocus={handleOpen}
          onblur={handleClose}
          onpointerenter={handleOpen}
          onpointerleave={handleClose}
        >
          {text ?? data.link.text}
        </a>
      )}

      {isClient && (
        <Portal container={document.getElementById("portal-root")!}>
          <Transition
            timings={[70, 150, 150, 150]}
            in={open}
            element={(state) => {
              if (state === "exited") return null
              if (!linkBounds.current) return null
              const x = linkBounds.current.x
              const y = linkBounds.current.y + window.scrollY
              const width = linkBounds.current.width
              const height = linkBounds.current.height
              const opacity = state === "entered" ? "1" : "0"

              const linkCenterX = x + width / 2
              let previewOffsetX = Math.min(
                linkCenterX - 200,
                window.innerWidth - 420
              )
              if (previewOffsetX < 10) previewOffsetX = 10

              return (
                <div className="transition-opacity" style={{ opacity }}>
                  <div
                    onpointerenter={() => (
                      clearHideTimeout(), (previewHovered.current = true)
                    )}
                    onpointerleave={() => {
                      previewHovered.current = false
                      handleClose()
                    }}
                    style={{
                      transform: `translate(${previewOffsetX}px, calc(${y + height}px + .5rem))`,
                    }}
                    className="preview-content"
                  >
                    <data.element />
                  </div>
                </div>
              )
            }}
          />
        </Portal>
      )}
    </>
  )
}
