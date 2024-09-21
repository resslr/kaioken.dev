type TutorialStep = {
  title: string
  content: () => JSX.Element
  files: Record<string, string>
  solution?: Record<string, string>
}

export const TUTORIAL_STEPS = {
  introduction: {
    title: "Introduction",
    content: () => {
      return (
        <div className="flex flex-col gap-2">
          <h1 className="text-xl leading-6">
            Welcome to Kaioken. This is a tutorial on how to use it.
          </h1>
          <hr />
          <p>
            Kaioken is a framework for building user interfaces. It is
            unopinionated and easy to use. It is very flexible and has excellent
            documentation.
          </p>
          <a href="/tutorial/your-first-app">Next: Your First App</a>
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
          <h1 className="text-xl leading-6">Let's create your first app!</h1>
          <p>Some subtext</p>
          <a href="/tutorial/counter">Next: Counter</a>
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
