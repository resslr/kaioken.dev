// import "./CodeMirror.css"
//import "./material.css"
import { useRef, useEffect, type ElementProps } from "kaioken"
import { EditorState, type Extension } from "@codemirror/state"
import { oneDark } from "@codemirror/theme-one-dark"
import { EditorView, basicSetup } from "codemirror"

export interface CodeMirrorComponentProps extends ElementProps<"div"> {
  readonly?: boolean
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
  readonly,
  ...props
}: CodeMirrorComponentProps) {
  const { className, ...rest } = props
  const elementRef = useRef<HTMLDivElement>(null)
  const cmInstance = useRef<EditorView | null>(null)
  useEffect(() => {
    if (!elementRef.current) return
    const extensions: readonly Extension[] = [
      oneDark,
      EditorState.readOnly.of(!!readonly),
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
      className={"prose CodeMirror max-w-full flex w-full " + className}
      ref={elementRef}
      {...rest}
    />
  )
}
