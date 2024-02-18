import { Container } from "$/components/atoms/Container"
import { usePageContext } from "$/context/pageContext"
import { useEffect, useRef } from "kaioken"
import { initCanvas } from "./canvas"
import { AlbumItemDemo } from "$/components/demos/albums/AlbumItemDemo"
import { AlbumListDemo } from "$/components/demos/albums/AlbumListDemo"
import { InlineCodeBlock } from "$/components/atoms/InlineCodeBlock"

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
        <Container className="min-h-[100dvh] flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl xs:text-8xl sm:text-9xl text-spicy font-bold !leading-snug text-shadow">
            Kaioken
          </h1>
          <span className="xs:text-lg sm:text-2xl font-light text-center">
            A powerful, familiar rendering library with a tiny footprint
          </span>
        </Container>
      </section>
      <div className="flex flex-col gap-20 mb-10">
        <section>
          <Container className="pt-10 pb-6">
            <h2 className="text-3xl font-medium leading-snug mb-4">
              Create composable user interfaces with reusable components
            </h2>
            <p className="text-lg font-light">
              Kaioken makes use of unflavoured JSX syntax, making it familiar
              and approachable to anyone with knowledge of HTML and Javascript.{" "}
              <span className="font-medium">
                No more <InlineCodeBlock>on:click</InlineCodeBlock> or{" "}
                <InlineCodeBlock>onClick</InlineCodeBlock>!
              </span>
            </p>
          </Container>
          <Container breakpoint="md" mobilePadding={false}>
            <AlbumItemDemo />
          </Container>
        </section>
        <section>
          <Container className="pt-10 pb-6">
            <h2 className="text-3xl font-medium leading-snug mb-4">
              Create dynamic user interfaces
            </h2>
            <p className="text-lg font-light">
              Kaioken components are Javascript functions, so control flow and
              dynamic rendering requires no additional knowledge.
            </p>
          </Container>
          <Container breakpoint="md" mobilePadding={false}>
            <AlbumListDemo />
          </Container>
        </section>
      </div>
    </div>
  )
}
