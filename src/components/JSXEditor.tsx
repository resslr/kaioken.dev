import { ElementProps, useMemo } from "kaioken"
import { CodeMirrorComponent } from "$/components/CodeMirrorEditor"
import { javascript } from "@codemirror/lang-javascript"

interface JSXEditorProps extends ElementProps<"div"> {
  content: string
  onContentChanged: (content: string) => void
}

export function JSXEditor({
  content,
  onContentChanged,
  ...props
}: JSXEditorProps) {
  const extensions = useMemo(
    () => [javascript({ jsx: true, typescript: true })],
    []
  )
  return (
    <CodeMirrorComponent
      initialContent={content}
      onContentChanged={onContentChanged}
      extensions={extensions}
      {...props}
    />
  )
}
