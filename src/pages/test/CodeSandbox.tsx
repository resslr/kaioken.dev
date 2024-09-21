//https://github.com/Sandpack/nodebox-runtime/blob/main/packages/nodebox/api.md
import { JSXEditor } from "$/components/JSXEditor"
import { TabGroup } from "$/components/TabGroup"
import { Nodebox, ShellProcess, WorkerStatusUpdate } from "@codesandbox/nodebox"
//import { Nodebox } from "@codesandbox/nodebox"
import {
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
  useAsync,
} from "kaioken"

interface CodeSanboxProps {
  files: Record<string, string>
}

declare global {
  interface Window {
    __nodeboxIFrame: HTMLIFrameElement
    __nodeboxInstance: Nodebox
  }
}

const NodeBoxContext = createContext<Nodebox>(null as any)

const useNodeBox = () => useContext(NodeBoxContext)
const NodeBoxProvider: Kaioken.FC<{ fallback: JSX.Element }> = ({
  children,
  fallback,
}) => {
  const [workerStatus, setWorkerStatus] = useState<WorkerStatusUpdate | null>(
    null
  )
  const [nodebox, setNodebox] = useState<Nodebox | null>(
    "window" in globalThis && !!window.__nodeboxInstance
      ? (window.__nodeboxInstance ?? null)
      : null
  )
  useEffect(() => {
    async function init() {
      if (!(("__nodeboxIFrame" in window) as any)) {
        window.__nodeboxIFrame = document.createElement("iframe")
        window.__nodeboxIFrame.style.display = "none"
        document.body.appendChild(window.__nodeboxIFrame)
        const nBoxModule = await import("@codesandbox/nodebox")
        const nodeBox = new nBoxModule.Nodebox({
          iframe: window.__nodeboxIFrame,
        })
        await nodeBox.connect()
        const shell = nodeBox.shell.create()
        shell.on("progress", setWorkerStatus)
        setNodebox(nodeBox)
        window.__nodeboxInstance = nodeBox
        return
      }
      setNodebox(window.__nodeboxInstance)
    }
    init()
  }, [])

  if (nodebox === null) return fallback

  return (
    <NodeBoxContext.Provider value={nodebox}>
      {children}
    </NodeBoxContext.Provider>
  )
}

const asyncNoop = async () => {}

export function CodeSandbox(props: CodeSanboxProps) {
  return (
    <NodeBoxProvider fallback={<p>loading...</p>}>
      <CodeSandboxImpl {...props} />
    </NodeBoxProvider>
  )
}
function CodeSandboxImpl(props: CodeSanboxProps) {
  const nodeBox = useNodeBox()
  const killCmd = useRef<() => Promise<void>>(asyncNoop)
  const previewIframeRef = useRef<HTMLIFrameElement>(null)
  const [selectedFile, setSelectedFile] = useState(Object.keys(props.files)[0])

  useEffect(() => {
    killCmd.current = async () => {
      killCmd.current = asyncNoop
      try {
        await Promise.all(
          Object.keys(props.files).map(async (file) => {
            nodeBox.fs.rm(`/src/${file}`)
          })
        )
      } catch (error) {
        console.error("err", error)
      }
    }
    ;(async () => {
      if (!previewIframeRef.current) return
      const shell = nodeBox.shell.create()
      await nodeBox.fs.init({
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
        "startVite.js": `
  import { createServer } from 'vite';
  import kaioken from 'vite-plugin-kaioken';
  async function startViteServer() {
    try {
      // Create a Vite dev server
      const server = await createServer({
        // Optional: Define Vite-specific options here if needed
        // This is similar to the vite.config.js configuration
        server: {
          port: 3000,  // Customize the port if desired
        },
        
        plugins: [kaioken({devtools:false})],
      });
  
      // Start the server
      await server.listen();

      process.on('message', (message) => {
        console.log("process.on('message')", message);
        if (message === 'shutdown') {
          console.log('Shutting down Vite server...');
          server.close().then(() => {
            console.log('Vite server closed.');
            process.exit(0);  // Exit the process after shutting down
          });
        }
      });

      // Optionally handle signals like SIGINT or SIGTERM to kill the server
      process.on('SIGINT', () => {
        console.log('SIGINT received, closing server...');
        server.close().then(() => {
          process.exit(0);
        });
      });

      process.on('SIGTERM', () => {
        console.log('SIGTERM received, closing server...');
        server.close().then(() => {
          process.exit(0);
        });
      });
  
      // Print out the URL to visit the app
      console.log(\`Vite server is running at: http://localhost:\${server.config.server.port}\`);
    } catch (err) {
      console.error('Error starting Vite server:', err);
    }
  }
  
  startViteServer();
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
  
  
  const root = document.getElementById("app")!
  mount(App, root)
            `,
      })
      await Promise.all(
        Object.keys(props.files).map(async (file) => {
          nodeBox.fs.writeFile(`/src/${file}`, props.files[file])
        })
      )

      console.log("running dev cmd...", shell)
      const devCommand = await shell.runCommand("node", ["startVite.js"])
      console.log("devCommand", devCommand)
      try {
        const previewInfo = await nodeBox.preview.waitForPort(3000, 10_000)
        console.log("previewInfo", previewInfo)
        previewIframeRef.current.setAttribute("src", previewInfo.url)
      } catch (error) {
        console.error("err", error)
      }
    })()
    return () => killCmd.current?.()
  }, [])

  const handleChange = (newCode: string) => {
    if (!nodeBox) return
    props.files[selectedFile] = newCode
    nodeBox.fs.writeFile(`/src/${selectedFile}`, newCode)
  }

  const code = props.files[selectedFile]

  return (
    <div className="mt-[var(--navbar-height)]">
      <button onclick={() => killCmd.current()}>Kill Nodebox</button>
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
        <iframe ref={previewIframeRef} className="flex-grow" />
      </div>
    </div>
  )
}
