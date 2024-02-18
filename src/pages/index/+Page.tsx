import { PageTitle } from "$/components/atoms/PageTitle"
import { CounterDemo } from "$/components/demos/CounterDemo"

export function Page() {
  return (
    <div className="w-full max-w-[1080px] mx-auto h-full">
      <PageTitle>Home</PageTitle>
      <span className="text-2xl">Some really dope ass text and stuff here</span>
      <CounterDemo />
    </div>
  )
}
