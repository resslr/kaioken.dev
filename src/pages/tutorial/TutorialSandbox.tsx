import { redirect } from "vike/abort"
import { CodeSandbox } from "./CodeSandbox"
import { useTutorialStep } from "./TutorialStepContext"

export function TutorialSandbox() {
  const ctx = useTutorialStep()
  const step = ctx?.step.current
  if (!step) {
    throw redirect("/tutorial/introduction")
  }

  return <CodeSandbox files={step.files} />
}
