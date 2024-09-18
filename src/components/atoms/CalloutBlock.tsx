export function CalloutBlock({ children }: { children: JSX.Children }) {
  return (
    <div className="px-4 py-2 bg-dark bg-opacity-50 backdrop-blur-md text-neutral-200 rounded border-l-4 border-l-[#b42641]">
      {children}
    </div>
  )
}
