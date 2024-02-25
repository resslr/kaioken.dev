import { Container } from "$/components/atoms/Container"
import { CommandPallete } from "$/components/CommandPallete"
import { Navbar } from "$/components/Navbar"
import { NavDrawer } from "$/components/NavDrawer"
import { usePageContext } from "$/context/pageContext"
import { Portal } from "kaioken"

export function LayoutDefault({ children }: { children?: JSX.Element[] }) {
  const { isClient } = usePageContext()
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-light dark:bg-dark border-b">
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className="pt-[var(--navbar-height)]">{children}</main>
      {isClient && (
        <Portal container={document.getElementById("portal-root")!}>
          <NavDrawer />
          <CommandPallete />
        </Portal>
      )}
    </>
  )
}
