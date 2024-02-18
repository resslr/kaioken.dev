import type { ElementProps } from "kaioken"

export function NavLink({ href, children }: ElementProps<"a">) {
  return (
    <a href={href} className="text-sm underline">
      {children}
    </a>
  )
}
