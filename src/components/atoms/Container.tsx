import { ElementProps } from "kaioken"

interface ContainerProps extends ElementProps<"div"> {
  mobilePadding?: boolean
}

export function Container({
  children,
  className = "",
  mobilePadding = true,
}: ContainerProps) {
  return (
    <div
      className={`${mobilePadding && "px-4"} sm:px-8 max-w-[var(--content-width)] mx-auto ${className}`}
    >
      {children}
    </div>
  )
}
