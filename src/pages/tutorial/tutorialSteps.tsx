import { ElementProps } from "kaioken"

type TutorialStep = {
  title: string
  content: () => JSX.Element
  files: Record<string, string>
  solution?: Record<string, string>
  readonly?: boolean
}

const TutorialPageHeading: Kaioken.FC<ElementProps<"h1">> = (props) => {
  return <h1 className="text-2xl font-bold" {...props} />
}

const TutorialPageFooterLink: Kaioken.FC<ElementProps<"a">> = (props) => {
  return (
    <a
      className="px-4 py-2 bg-light hover:bg-neutral-300 rounded text-dark font-medium"
      {...props}
    />
  )
}

export const TUTORIAL_STEPS = {
  introduction: {
    title: "Introduction",
    content: () => {
      return (
        <div className="flex flex-col gap-4">
          <TutorialPageHeading>
            Welcome to Kaioken. This is a tutorial on how to use it.
          </TutorialPageHeading>
          <p>
            Kaioken is a framework for building user interfaces. It is
            unopinionated and easy to use. It is very flexible and has excellent
            documentation.
          </p>
          <footer className="flex">
            <TutorialPageFooterLink href="/tutorial/your-first-app">
              Next: Your First App
            </TutorialPageFooterLink>
          </footer>
        </div>
      )
    },
    files: {
      ["App.tsx"]: `
export default function App() {
  return <h1>Hello World!</h1>
}
`,
    },
  },
  ["your-first-app"]: {
    title: "Your First App",
    content: () => {
      return (
        <div className="flex flex-col gap-2">
          <TutorialPageHeading>
            Let's create your first app!
          </TutorialPageHeading>
          <p>Some subtext</p>
        </div>
      )
    },
    files: {
      ["App.tsx"]: `
export default function App() {
  const name = "Kaioken"
  return <h1>Hello {name}!</h1>
}
`,
    },
  },
} as const satisfies Record<string, TutorialStep>
