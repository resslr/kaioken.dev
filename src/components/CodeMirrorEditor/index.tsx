import "./CodeMirror.css"
import { useRef, useEffect, type ElementProps } from "kaioken"
import { EditorState, type Extension } from "@codemirror/state"
import { EditorView, basicSetup } from "codemirror"

interface CodeMirrorComponentProps extends ElementProps<"div"> {
  initialContent?: string
  onContentChanged?: (content: string) => void
  /** @default true */
  includeBasicExtensions?: boolean
  extensions?: Extension[]
}

export function CodeMirrorComponent({
  initialContent,
  onContentChanged,
  includeBasicExtensions = true,
  extensions: userExtensions,
  ...props
}: CodeMirrorComponentProps) {
  const { className, ...rest } = props
  const elementRef = useRef<HTMLDivElement>(null)
  const cmInstance = useRef<EditorView | null>(null)
  useEffect(() => {
    if (!elementRef.current) return
    const extensions: Extension[] = [
      ...(includeBasicExtensions ? [basicSetup] : []), // Basic setup for editing
      ...(userExtensions ?? []),
      ...(onContentChanged
        ? [
            EditorView.updateListener.of((update) => {
              if (update.docChanged) {
                onContentChanged(update.state.doc.toString())
              }
            }),
          ]
        : []),
    ]

    cmInstance.current = new EditorView({
      state: EditorState.create({
        doc: initialContent,
        extensions,
      }),
      parent: elementRef.current,
    })

    return () => cmInstance.current?.destroy()
  }, [userExtensions, includeBasicExtensions, onContentChanged])

  return (
    <div
      className={"prose CodeMirror " + className}
      ref={elementRef}
      {...rest}
    />
  )
}
