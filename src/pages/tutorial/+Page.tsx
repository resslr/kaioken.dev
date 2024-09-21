import { usePageContext } from "$/context/pageContext"
import { redirect } from "vike/abort"
import { CodeSandbox } from "./CodeSandbox"
import { TUTORIAL_STEPS } from "./tutorialSteps"

export function Page() {
  const ctx = usePageContext()
  // if (ctx.routeParams.tutorialId === undefined) {
  //   setTimeout(() => {
  //     redirect("/tutorial/introduction")
  //   }, 100)
  // }
  const tut =
    TUTORIAL_STEPS[
      ctx.routeParams.tutorialId as any as keyof typeof TUTORIAL_STEPS
    ]

  return (
    <div className="mt-[var(--navbar-height)]">
      <div className="flex">
        <div className="w-1/3">{tut.content()}</div>
        <CodeSandbox files={tut.files} className="flex-grow w-2/3" />
      </div>
    </div>
  )
}
