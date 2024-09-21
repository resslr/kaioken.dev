import { usePageContext } from "$/context/pageContext"
import { redirect } from "vike/abort"
import { CodeSandbox } from "./CodeSandbox"
import { TUTORIAL_STEPS } from "./tutorialSteps"

export function Page() {
  const ctx = usePageContext()
  const tut =
    TUTORIAL_STEPS[
      ctx.routeParams.tutorialId as any as keyof typeof TUTORIAL_STEPS
    ]
  if (!tut) {
    throw redirect("/tutorial/introduction")
  }

  return (
    <div className="mt-[var(--navbar-height)]">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          <tut.content />
        </div>
        <CodeSandbox files={tut.files} className="w-full md:w-2/3" />
      </div>
    </div>
  )
}
