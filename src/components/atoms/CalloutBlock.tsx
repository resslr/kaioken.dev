function DefaultCalloutBlock({ children }: { children: JSX.Children }) {
  return (
    <div className="px-4 py-2 bg-dark bg-opacity-50 backdrop-blur-md text-neutral-200 rounded border-l-4 border-l-[#b42641]">
      {children}
    </div>
  )
}

function InfoCalloutBlock({ children }: { children: JSX.Children }) {
  return (
    <div className="px-4 py-2 bg-info backdrop-blur-md text-neutral-200 rounded">
      {children}
    </div>
  )
}

type CalloutBlockProps = {
  children: JSX.Children
  variant?: "default" | "info"
}

export function CalloutBlock({ children, variant }: CalloutBlockProps) {
  switch (variant) {
    case "info":
      return <InfoCalloutBlock>{children}</InfoCalloutBlock>
    default:
      return <DefaultCalloutBlock>{children}</DefaultCalloutBlock>
  }
}
