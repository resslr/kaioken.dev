import { redirect } from "vike/abort"
import CodeSandbox from "$/components/CodeSandbox"
import { useTutorialStep } from "./TutorialStepContext"
import { usePageContext } from "$/context/pageContext"

export function TutorialSandbox() {
  const ctx = useTutorialStep()
  const step = ctx?.step.current
  if (!step) {
    throw redirect("/tutorial/introduction")
  }

  return <CodeSandbox key={usePageContext().urlPathname} files={step.files} />
}
