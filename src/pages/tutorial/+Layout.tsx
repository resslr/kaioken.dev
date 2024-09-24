import { Container } from "$/components/atoms/Container"
import { TutorialStepProvider } from "./TutorialStepContext"
import { TutorialSandbox } from "./TutorialSandbox"

export function Layout({ children }: { children: JSX.Children }) {
  return (
    <TutorialStepProvider>
      <div className="flex gap-8 p-8 mt-[var(--navbar-height)] min-h-[calc(100dvh+var(--navbar-height-negative))]">
        <div className="prose prose-invert w-full">{children}</div>
        <div className="flex-grow w-full">
          <TutorialSandbox />
        </div>
      </div>
    </TutorialStepProvider>
  )
}
