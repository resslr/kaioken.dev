import { Container } from "$/components/atoms/Container"
import { SidebarContent } from "./SidebarContent"

export function Layout({ children }: { children?: JSX.Element[] }) {
  return (
    <Container className="flex gap-8 min-h-[calc(100dvh+var(--navbar-height-negative))]">
      <aside className="hidden sm:block min-w-[180px] max-h-[calc(100vh-2.5rem-60px)] sticky top-[80px] p-1 overflow-y-scroll">
        <SidebarContent />
      </aside>
      <div className="prose prose-neutral lg:prose-xl dark:prose-invert max-w-max py-5">
        {children}
      </div>
    </Container>
  )
}
