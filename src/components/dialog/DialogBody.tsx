import { ElementProps } from "kaioken"

export function DialogBody({ children, className = "" }: ElementProps<"div">) {
  return <div className={`p-2 ${className}`}>{children}</div>
}
