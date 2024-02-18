import { NavLink } from "$/components/atoms/NavLink"
import { SITE_LINKS } from "$/constants"
import { ElementProps } from "kaioken"

type Section = {
  title: string
  items: { text: string; href: string }[]
}

const sections: Section[] = [
  {
    title: "Getting Started",
    items: [
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
      { text: "Something", href: "" },
    ],
  },
]

export function SidebarContent() {
  return (
    <>
      {sections.map((section) => (
        <div className="mb-3">
          <Header>{section.title}</Header>
          <LinkList>
            {section.items.map((item) => (
              <Link href={item.href}>{item.text}</Link>
            ))}
          </LinkList>
        </div>
      ))}
    </>
  )
}

function Header({ children, className, ...props }: ElementProps<"h4">) {
  return (
    <h4 {...props} className={`font-medium ${className || ""}`}>
      {children}
    </h4>
  )
}

function LinkList({ children }: ElementProps<"div">) {
  return <div className="flex flex-col w-full gap-1 py-2">{children}</div>
}

function Link({ children, href }: ElementProps<"a">) {
  return (
    <a className="text-muted" href={href}>
      {children}
    </a>
  )
}
