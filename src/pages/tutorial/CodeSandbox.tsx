import { JSXEditor } from "$/components/JSXEditor"
import { TabGroup } from "$/components/TabGroup"
import { useRef, useEffect, useState, ElementProps } from "kaioken"
import { NodeBoxProvider, useNodeBox, useWorkerStatus } from "./NodeBox"
import { FILES_MAP } from "./filesMap"

interface CodeSanboxProps extends ElementProps<"div"> {
  files: Record<string, string>
}
export function CodeSandbox(props: CodeSanboxProps) {
  return (
    <NodeBoxProvider
      fallback={
        <small className="uppercase">preparing sandbox environment...</small>
      }
    >
      <CodeSandboxImpl {...props} />
    </NodeBoxProvider>
  )
}

function WorkerStatusDisplayText() {
  const status = useWorkerStatus()
  if (!status) return null
  switch (status.state) {
    case "command_running":
      return null
    case "starting_command":
    case "downloading_manifest":
      return status.state + "..."
    case "downloaded_module":
      return `downloaded module ${status.name}@${status.version}. total pending modules: ${status.totalPending}`
  }
}

function CodeSandboxImpl({ files, ...props }: CodeSanboxProps) {
  const nodeBox = useNodeBox()
  const killCmd = useRef<(() => Promise<void>) | null>(null)
  const previewIframeRef = useRef<HTMLIFrameElement>(null)
  const [selectedFile, setSelectedFile] = useState(Object.keys(files)[0])

  useEffect(() => {
    killCmd.current?.()
    killCmd.current = async () => {
      killCmd.current = null
      try {
        await Promise.all(
          Object.keys(files).map(async (file) => {
            nodeBox.fs.rm(`/src/${file}`)
          })
        )
      } catch (error) {
        console.error("err", error)
      }
    }
    const init = async () => {
      if (!previewIframeRef.current) return
      const shell = nodeBox.shell.create()
      await nodeBox.fs.init({ ...FILES_MAP })
      if (!previewIframeRef.current) return
      await Promise.all(
        Object.keys(files).map(async (file) => {
          nodeBox.fs.writeFile(`/src/${file}`, files[file])
        })
      )
      if (!previewIframeRef.current) return
      await shell.runCommand("node", ["startVite.js"])
      try {
        if (!previewIframeRef.current) return
        const previewInfo = await nodeBox.preview.waitForPort(3000, 10_000)
        if (!previewIframeRef.current) return
        previewIframeRef.current.setAttribute("src", previewInfo.url)
      } catch (error) {
        console.error("err", error)
      }
    }
    init()
    return () => killCmd.current?.()
  }, [])

  const handleChange = (newCode: string) => {
    if (!nodeBox) return
    files[selectedFile] = newCode
    nodeBox.fs.writeFile(`/src/${selectedFile}`, newCode)
  }

  const code = files[selectedFile]

  const { className, ...rest } = props
  return (
    <div className={`flex flex-col ${className || ""}`} {...rest}>
      <TabGroup
        items={Object.keys(files)}
        value={selectedFile}
        onSelect={setSelectedFile}
      />
      <JSXEditor
        key={selectedFile}
        content={code}
        onContentChanged={handleChange}
        className="flex-grow w-full"
      />
      <iframe ref={previewIframeRef} className="flex-grow" />
      <small className="uppercase">
        <WorkerStatusDisplayText />
      </small>
    </div>
  )
}
