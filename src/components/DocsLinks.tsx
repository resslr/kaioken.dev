import { usePageContext } from "$/context/pageContext"
import { sections } from "$/docs-meta"
import { useNavDrawer } from "$/state/navDrawer"
import { isLinkActive } from "$/utils"
import { ElementProps } from "kaioken"

export function SidebarContent() {
  const { urlPathname } = usePageContext()
  const { setOpen } = useNavDrawer()
  return (
    <>
      {sections.map((section) => (
        <div className="mb-3">
          <Header>
            <a
              href={
                isLinkActive(section.href, urlPathname)
                  ? section.href + "#"
                  : section.href
              }
              onclick={() => setOpen(false)}
            >
              {section.title}
            </a>
          </Header>
          <LinkList>
            {section.sections.map((item) => (
              <Link
                href={`${section.href}#${item.id}`}
                onclick={() => setOpen(false)}
              >
                {item.title}
              </Link>
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
  return <div className="flex flex-col w-full gap-1 py-2 px-1">{children}</div>
}

function Link({ children, ...props }: ElementProps<"a">) {
  return (
    <a className="text-muted" {...props}>
      {children}
    </a>
  )
}
