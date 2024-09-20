import { CodeSandbox } from "./CodeSandbox"

const files = {
  ["App.jsx"]: `
import {createElement} from "kaioken"
import {Counter} from "./Counter"

export default function App() {
  return <Counter />
}
`,
  ["Counter.jsx"]: `
import {createElement, useState} from "kaioken"
export function Counter() {
  const [count, setCount] = useState(0)
  return <button onclick={() => setCount(prev => prev + 1)}>Click me! {count}</button>
}
`,
}
export function Page() {
  return (
    <div className="mt-[var(--navbar-height)]">
      <CodeSandbox files={files} />
    </div>
  )
}

// async function main() {
//   // Iframe selector or element itself
//   const iframe = document.getElementById("iframe")

//   // Files, environment and dependencies
//   const content: SandboxSetup = {
//     files: {
//       // We infer dependencies and the entry point from package.json
//       "/package.json": {
//         code: JSON.stringify({
//           main: "index.js",
//           dependencies: { uuid: "latest" },
//         }),
//       },

//       // Main file
//       "/index.js": { code: `console.log(require('uuid'))` },
//     },
//     //template: "parcel"
//   }

//   // Optional options
//   const options: ClientOptions = {}

//   // Properly load and mount the bundler
//   const client = await loadSandpackClient(iframe, content, options)

//   /**
//    * When you make a change, you can just run `updateSandbox`.
//    * We'll automatically discover which files have changed
//    * and hot reload them.
//    */
//   client.updateSandbox({
//     files: {
//       "/index.js": {
//         code: `console.log('New Text!')`,
//       },
//     },
//     entry: "/index.js",
//     dependencies: {
//       uuid: "latest",
//     },
//   })
// }
