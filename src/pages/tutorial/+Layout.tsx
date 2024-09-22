import { Container } from "$/components/atoms/Container"
import { TutorialStepProvider } from "./TutorialStepContext"
import { TutorialSandbox } from "./TutorialSandbox"

export function Layout({ children }: { children: JSX.Children }) {
  return (
    <TutorialStepProvider>
      <Container className="flex gap-8 mt-[var(--navbar-height)] min-h-[calc(100dvh+var(--navbar-height-negative))]">
        <div className="prose prose-invert w-full">{children}</div>
        <div className="flex-grow w-full">
          <TutorialSandbox />
        </div>
      </Container>
    </TutorialStepProvider>
  )
}
