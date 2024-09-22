export type TutorialStep = {
  title: string
  files: Record<string, string>
  solution?: Record<string, string>
  readonly?: boolean
}

export const TUTORIAL_STEPS = {
  introduction: {
    title: "Introduction",
    files: {
      ["App.jsx"]: `
export default function App() {
  return <h1>Hello World!</h1>
}
`,
    },
  },
  ["your-first-app"]: {
    title: "Your First App",
    files: {
      ["App.jsx"]: `
export default function App() {
  return <h1>Hello world!</h1>
}
`,
    },
  },
} as const satisfies Record<string, TutorialStep>
