import { Button } from "$/components/atoms/Button"
import { usePageContext } from "$/context/pageContext"
import { redirect } from "vike/abort"

export { Page }
function Page() {
  const pageContext = usePageContext()
  if (pageContext.urlPathname === "/tutorial")
    throw redirect("/tutorial/introduction")

  let msg: string = pageContext.is404
    ? "We couldn't find the page you're looking for."
    : "Something went wrong. Try again later."

  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center text-center relative mt-[var(--navbar-height-negative)] px-5">
      <h1 className="text-5xl">Oops!</h1>
      <h1 className="text-3xl">{msg}</h1>
      <Button ariaLabel="Go back" onclick={() => history.back()}>
        Go back
      </Button>
    </div>
  )
}
