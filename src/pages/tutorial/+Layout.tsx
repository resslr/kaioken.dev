import { Container } from "$/components/atoms/Container"
import { TutorialStepProvider } from "./TutorialStepContext"
import { TutorialSandbox } from "./TutorialSandbox"

export function Layout({ children }: { children: JSX.Children }) {
  return (
    <Container className="flex gap-8 mt-[var(--navbar-height)] min-h-[calc(100dvh+var(--navbar-height-negative))]">
      <TutorialStepProvider>
        <div className="prose prose-invert flex-grow">{children}</div>
        <div className="flex-grow w-full">
          <TutorialSandbox />
        </div>
      </TutorialStepProvider>
    </Container>
  )
}
