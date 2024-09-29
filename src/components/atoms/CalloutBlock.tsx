function DefaultCalloutBlock({
  fontSize = "small",
  children,
}: {
  fontSize?: FontSize
  children: JSX.Children
}) {
  return (
    <div
      className={`${fontSize === "small" ? "text-sm" : ""} callout-block not-prose px-4 py-2 bg-dark bg-opacity-50 backdrop-blur-md text-neutral-200 rounded border-l-4 border-l-[#b42641]`}
    >
      {children}
    </div>
  )
}

function InfoCalloutBlock({
  fontSize = "small",
  children,
}: {
  fontSize?: FontSize
  children: JSX.Children
}) {
  return (
    <div
      className={`${fontSize === "small" ? "text-sm" : ""} callout-block not-prose px-4 py-2 bg-info backdrop-blur-md text-neutral-200 rounded`}
    >
      {children}
    </div>
  )
}
type FontSize = "small" | "normal"
type CalloutBlockProps = {
  children: JSX.Children
  variant?: "default" | "info"
  fontSize?: FontSize
}

export function CalloutBlock({
  children,
  variant,
  fontSize,
}: CalloutBlockProps) {
  switch (variant) {
    case "info":
      return <InfoCalloutBlock fontSize={fontSize}>{children}</InfoCalloutBlock>
    default:
      return (
        <DefaultCalloutBlock fontSize={fontSize}>
          {children}
        </DefaultCalloutBlock>
      )
  }
}
