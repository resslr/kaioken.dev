import { JSXEditor } from "$/components/JSXEditor"
import { TabGroup } from "$/components/TabGroup"
import { useRef, useEffect, useState } from "kaioken"
import { NodeBoxProvider, useNodeBox, useWorkerStatus } from "./NodeBox"
import { FILES_MAP } from "./filesMap"

interface CodeSanboxProps {
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
      <small className="uppercase">
        <WorkerStatusDisplayText />
      </small>
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

function CodeSandboxImpl(props: CodeSanboxProps) {
  const nodeBox = useNodeBox()
  const killCmd = useRef<(() => Promise<void>) | null>(null)
  const previewIframeRef = useRef<HTMLIFrameElement>(null)
  const [selectedFile, setSelectedFile] = useState(Object.keys(props.files)[0])

  useEffect(() => {
    killCmd.current?.()
    killCmd.current = async () => {
      killCmd.current = null
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
    const init = async () => {
      if (!previewIframeRef.current) return
      const shell = nodeBox.shell.create()
      await nodeBox.fs.init({ ...FILES_MAP })
      if (!previewIframeRef.current) return
      await Promise.all(
        Object.keys(props.files).map(async (file) => {
          nodeBox.fs.writeFile(`/src/${file}`, props.files[file])
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
    props.files[selectedFile] = newCode
    nodeBox.fs.writeFile(`/src/${selectedFile}`, newCode)
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
        <iframe ref={previewIframeRef} className="flex-grow" />
      </div>
    </div>
  )
}
