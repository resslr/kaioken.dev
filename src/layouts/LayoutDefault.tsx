import { Navbar } from "$/components/Navbar"
import { Sidebar } from "$/components/Sidebar"
import { usePageContext } from "$/context/pageContext"
import { Portal } from "kaioken"

export function LayoutDefault({ children }: { children?: JSX.Element[] }) {
  const { isClient } = usePageContext()
  return (
    <div className="flex flex-col items-center m-auto w-full min-h-screen">
      <Navbar />
      <Content>{children}</Content>
      {isClient && (
        <Portal container={document.getElementById("portal-root")!}>
          <Sidebar />
        </Portal>
      )}
    </div>
  )
}

function Content({ children }: { children?: JSX.Element[] }) {
  return <div className="p-5 pb-10 sm:px-8">{children}</div>
}
