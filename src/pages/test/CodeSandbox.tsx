import { JSXEditor } from "$/components/JSXEditor"
import { TabGroup } from "$/components/TabGroup"
import { Nodebox } from "@codesandbox/nodebox"
//import { Nodebox } from "@codesandbox/nodebox"
import { useRef, useEffect, useState } from "kaioken"

interface CodeSanboxProps {
  files: Record<string, string>
}

export function CodeSandbox(props: CodeSanboxProps) {
  const emulatorInstance = useRef<Nodebox | null>(null)
  const [selectedFile, setSelectedFile] = useState(Object.keys(props.files)[0])
  const runtimeIframeRef = useRef<HTMLIFrameElement>(null)
  const previewIframeRef = useRef<HTMLIFrameElement>(null)
  useEffect(() => {
    ;(async () => {
      if (!runtimeIframeRef.current || !previewIframeRef.current) return
      //debugger
      const nBoxModule = await import("@codesandbox/nodebox")
      const emulator = new nBoxModule.Nodebox({
        iframe: runtimeIframeRef.current,
      })
      emulatorInstance.current = emulator
      await emulator.connect()

      await emulator.fs.init({
        "package.json": JSON.stringify({
          name: "test",
          type: "module",
          scripts: {
            dev: "vite",
          },
          dependencies: {
            kaioken: "latest",
            "esbuild-wasm": "latest",
            "@rollup/wasm-node": "latest",
          },
          devDependencies: {
            typescript: "5.5.3",
            vite: "4.5.5",
            "vite-plugin-kaioken": "latest",
          },
          npm: {
            overrides: {
              rollup: "npm:@rollup/wasm-node",
            },
          },
        }),
        "/tsconfig.json": `
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    "jsx": "preserve"
  },
  "include": ["src"]
}
`,
        "/vite.config.ts": `
import { defineConfig } from "vite"
import kaioken from "vite-plugin-kaioken"
console.log("defineConfig");
export default defineConfig({
  plugins: [kaioken({devtools:false})],
})
`,
        "/index.html": `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + TS + Kaioken</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`,
        "/src/main.ts": `
import { mount } from "kaioken"
import App from "./App"

const root = document.querySelector<HTMLDivElement>("#app")!
mount(App, root)
          `,
        ...Object.keys(props.files).reduce(
          (acc, key) => {
            acc[`/src/${key}`] = props.files[key]
            return acc
          },
          {} as Record<string, string>
        ),
      })
      const shell = emulator.shell.create()
      shell.on("progress", (upd) => console.log(`shell.on("progress"`, upd))
      shell.on("exit", (code) => console.log(`shell.on("exit"`, code))
      shell.stdout.on("data", (d) => console.log(`shell.stdout.on("data"`, d))
      shell.stderr.on("data", (d) => console.log(`shell.stderr.on("data"`, d))
      console.log("running dev cmd...", shell)
      const devCommand = await shell.runCommand("vite", [])
      console.log("devCommand", devCommand)
      try {
        const previewInfo = await emulator.preview.getByShellId(shell.id!)
        console.log("previewInfo", previewInfo)
        previewIframeRef.current.setAttribute("src", previewInfo.url)
      } catch (error) {
        console.error("err", error)
      }
    })()
  }, [])

  const handleChange = (newCode: string) => {
    if (!emulatorInstance.current) return
    props.files[selectedFile] = newCode
    emulatorInstance.current.fs.writeFile(`/src/${selectedFile}`, newCode)
  }

  const code = props.files[selectedFile]

  return (
    <div className="mt-[var(--navbar-height)]">
      <TabGroup
        items={Object.keys(props.files)}
        value={selectedFile}
        onSelect={setSelectedFile}
      />
      <div className="flex gap-2">
        <JSXEditor
          key={selectedFile}
          content={code}
          onContentChanged={handleChange}
          className="flex-grow"
        />
        <iframe hidden ref={runtimeIframeRef} />
        <iframe ref={previewIframeRef} className="flex-grow" />
      </div>
    </div>
  )
}
