import { CodeBlock } from "../CodeBlock"

export function CodeDemo({
  filename,
  code,
  children,
}: {
  filename: string
  code: string
  children?: JSX.Element
}) {
  return (
    <div className="grid md:grid-cols-5">
      <div className="flex flex-col md:col-span-3 md:rounded-2xl bg-stone-800 text-light overflow-hidden z-10 shadow-[#0003] dark:shadow-[#0006] shadow-lg ">
        <h4 className="text-sm px-4 py-2 text-stone-200 opacity-80">
          {filename}
        </h4>
        <CodeBlock code={code} />
      </div>
      <div className="md:col-span-2 md:rounded-e-2xl md:my-8 px-4 py-8 my-0 bg-theme-gradient dark:bg-theme-gradient-dark flex items-center justify-center shadow-[#0003] dark:shadow-[#0006] shadow-lg">
        {children}
      </div>
    </div>
  )
}
