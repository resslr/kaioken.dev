import { LogoIcon } from "../icons/LogoIcon"

export function HomeLink() {
  return (
    <a href="/" className="flex gap-1">
      <LogoIcon />
      <span className="text-primary font-medium">Kaioken</span>
    </a>
  )
}
