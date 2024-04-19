import { Container } from "$/components/atoms/Container"
import { SidebarContent } from "$/components/SidebarContent"

export function Layout({ children }: { children: JSX.Element[] }) {
  return (
    <Container className="flex gap-8 min-h-[calc(100dvh+var(--navbar-height-negative))]">
      <aside className="hidden sm:block min-w-[200px] max-h-[calc(100vh-2.5rem-60px)] sticky top-[80px] p-1 overflow-y-auto">
        <SidebarContent />
      </aside>
      <div className="prose prose-invert flex-grow py-5 w-full max-w-none sm:max-w-[calc(100%-200px-2rem)]">
        {children}
      </div>
    </Container>
  )
}
