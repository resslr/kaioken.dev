import { Container } from "$/components/atoms/Container"
import { usePageContext } from "$/context/pageContext"
import { useEffect, useRef } from "kaioken"
import { initCanvas } from "./canvas"
import { AlbumItemDemo } from "$/components/demos/albums/AlbumItemDemo"

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
      <div className="flex flex-col gap-10 mb-10">
        <section>
          <Container className="py-10 flex items-center">
            <h2 className="text-3xl font-medium leading-snug">
              Composable user interfaces with reusable components
            </h2>
          </Container>
          <Container breakpoint="md" mobilePadding={false}>
            <AlbumItemDemo />
          </Container>
        </section>
      </div>
    </div>
  )
}
