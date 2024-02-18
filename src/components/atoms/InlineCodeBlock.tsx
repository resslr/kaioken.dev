import { ElementProps } from "kaioken"

export function InlineCodeBlock({ children }: ElementProps<"span">) {
  return (
    <span className="text-base px-1 font-mono bg-stone-800 dark:bg-stone-700 text-light rounded">
      {children}
    </span>
  )
}
