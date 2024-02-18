import { Container } from "$/components/atoms/Container"
import { SidebarContent } from "./SidebarContent"

export function Layout({ children }: { children?: JSX.Element[] }) {
  return (
    <Container>
      <div className="flex gap-8">
        <aside className="hidden sm:block min-w-[180px] max-h-[calc(100vh-2.5rem-60px)] sticky top-[80px] p-1 overflow-y-scroll">
          <SidebarContent />
        </aside>
        {children}
      </div>
    </Container>
  )
}
