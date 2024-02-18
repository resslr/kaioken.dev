import { ElementProps } from "kaioken"

export function DemoComponentWrapper({
  children,
  className,
}: ElementProps<"div">) {
  return (
    <div
      className={`p-4 bg-white dark:bg-[#1c1a1a] shadow-[#0003] dark:shadow-[#0005] shadow-lg flex-grow rounded-lg ${className || ""}`}
    >
      {children}
    </div>
  )
}
