import { Navbar } from "$/components/Navbar"
import { NavDrawer } from "$/components/NavDrawer"
import { usePageContext } from "$/context/pageContext"
import { Portal } from "kaioken"

export function LayoutDefault({ children }: { children?: JSX.Element[] }) {
  const { isClient } = usePageContext()
  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>
      <main className="font-light">
        <Content>{children}</Content>
      </main>
      {isClient && (
        <Portal container={document.getElementById("portal-root")!}>
          <NavDrawer />
        </Portal>
      )}
    </>
  )
}

function Content({ children }: { children?: JSX.Element[] }) {
  return <div className="p-5 sm:px-8">{children}</div>
}
