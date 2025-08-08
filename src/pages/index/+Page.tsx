import { Container } from "$/components/atoms/Container"
import { TodoListDemo } from "$/components/demos/todos/TodoListDemo"
import { LandingSection } from "./LandingSection"

export function Page() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <section>
        <Container className="min-h-[100vh] flex flex-col items-center justify-center h-full pt-60">
          <h1 className="text-6xl xs:text-8xl sm:text-9xl font-bold leading-snug! text-shadow text-light">
            Kiru
          </h1>
          <p className="text-lg xs:text-xl sm:text-2xl font-light text-center text-shadow text-light mb-6">
            A batteries-included, easy-to-use rendering library with a tiny
            footprint
          </p>
          <a href="/docs/getting-started" className="link-button mb-40">
            Get Started
          </a>
          <LandingSection />
        </Container>
      </section>
      <div className="flex flex-col gap-12 py-20">
        <section>
          <Container className="pb-6">
            <h2 className="text-3xl font-medium leading-snug mb-4">
              Do more with less... Actually, just do less.
            </h2>
            <p className="text-lg font-light">
              Kiru makes it easy to create optimized web apps by embracing a{" "}
              <i>'reactivity where it matters'</i> approach.
            </p>
          </Container>
          <Container breakpoint="md" mobilePadding={false}>
            <TodoListDemo />
          </Container>
        </section>
      </div>
    </div>
  )
}
