export function CodeDemo({
  filename,
  CodeBlock,
  children,
}: {
  filename: string
  CodeBlock: () => JSX.Element
  children: JSX.Children
}) {
  //bg-[#1c1c1c]
  return (
    <div className="grid md:grid-cols-5">
      <div className="not-prose flex flex-col md:col-span-3 md:rounded-2xl glass-container text-light overflow-hidden z-10 shadow-[#0006] shadow-lg">
        <span className="text-sm px-4 py-2 text-stone-200 opacity-80">
          {filename}
        </span>
        <CodeBlock />
      </div>
      <div className="md:col-span-2 md:rounded-e-2xl md:my-8 px-4 py-8 my-0 bg-theme-gradient-dark flex items-center justify-center shadow-[#0006] shadow-lg">
        {children}
      </div>
    </div>
  )
}
