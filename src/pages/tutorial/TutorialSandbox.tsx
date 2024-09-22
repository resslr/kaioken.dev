import { usePageContext } from "$/context/pageContext"
import { redirect } from "vike/abort"
import { TUTORIAL_STEPS } from "./tutorialSteps"
import { CodeSandbox } from "./CodeSandbox"

export function TutorialSandbox() {
  const ctx = usePageContext()
  const tutorialId = ctx.urlPathname.split("/tutorial/")[1]
  const tut = TUTORIAL_STEPS[tutorialId as any as keyof typeof TUTORIAL_STEPS]
  if (!tut) {
    throw redirect("/tutorial/introduction")
  }

  return <CodeSandbox files={tut.files} />
}
