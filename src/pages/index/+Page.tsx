import { Container } from "$/components/atoms/Container"
import { CounterDemo } from "$/components/demos/CounterDemo"
import { usePageContext } from "$/context/pageContext"
import { useEffect, useRef } from "kaioken"
import { initCanvas } from "./canvas"

export function Page() {
  const { isClient } = usePageContext()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  if (isClient) {
    useEffect(() => {
      if (!canvasRef.current) return
      initCanvas(canvasRef.current)
    }, [canvasRef.current])
  }

  return (
    <div className="w-full h-full overflow-x-hidden">
      <section className="relative mt-[var(--navbar-height-negative)]">
        <div className="canvas-wrapper absolute overflow-hidden mt-[var(--navbar-height-negative) -z-10">
          <canvas ref={canvasRef} />
        </div>
        <Container className="min-h-[calc(100dvh)] flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl xs:text-8xl sm:text-9xl text-spicy font-bold !leading-snug text-shadow">
            Kaioken
          </h1>
          <span className="text-2xl">
            Some really dope ass text and stuff here
          </span>
        </Container>
      </section>
      <section className="mb-10">
        <Container className="py-10 flex items-center">
          <h2 className="text-5xl font-medium leading-snug">
            Simple, familiar components
          </h2>
        </Container>
        <Container mobilePadding={false}>
          <CounterDemo />
        </Container>
      </section>
      <section>
        <Container mobilePadding={false}>
          <CounterDemo />
        </Container>
      </section>
    </div>
  )
}
