import { Container } from "$/components/atoms/Container"
import { Navbar } from "$/components/Navbar"
import { NavDrawer } from "$/components/NavDrawer"
import { usePageContext } from "$/context/pageContext"
import { Portal } from "kaioken"

export function LayoutDefault({ children }: { children?: JSX.Element[] }) {
  const { isClient } = usePageContext()
  return (
    <>
      <header className="sticky top-0 z-50 bg-light dark:bg-dark border-b">
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>{children}</main>
      {isClient && (
        <Portal container={document.getElementById("portal-root")!}>
          <NavDrawer />
        </Portal>
      )}
    </>
  )
}
