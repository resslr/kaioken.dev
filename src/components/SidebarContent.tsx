import { usePageContext } from "$/context/pageContext"
import { DocItem as DocItemMeta, docMeta } from "$/docs-meta"
import { useNavDrawer } from "$/state/navDrawer"
import { isLinkActive } from "$/utils"
import { ElementProps } from "kaioken"

export function SidebarContent() {
  const { urlPathname } = usePageContext()
  const { value: open, setOpen } = useNavDrawer()

  return (
    <>
      {docMeta.map((data) => (
        <div className="mb-3">
          <Header>
            {data.href ? (
              <a
                href={
                  isLinkActive(data.href, urlPathname)
                    ? data.href + "#"
                    : data.href
                }
                onclick={() => open && setOpen(false)}
                className="block"
              >
                {data.title}
              </a>
            ) : (
              <span>{data.title}</span>
            )}
          </Header>
          {data.pages && (
            <LinkList>
              {data.pages.map((page) =>
                page.disabled ? (
                  <Link className="flex items-center justify-between">
                    <span className="opacity-75">{page.title}</span>
                    <span className="badge">Upcoming</span>
                  </Link>
                ) : (
                  <Link
                    href={page.href}
                    className={`${isLinkActive(page.href, urlPathname) ? "text-black dark:text-light" : ""}`}
                  >
                    {page.title}
                  </Link>
                )
              )}
            </LinkList>
          )}
          {data.sections && (
            <LinkList>
              {data.sections.map((section) => (
                <Link
                  href={`${data.href}#${section.id}`}
                  onclick={() => open && setOpen(false)}
                >
                  {section.title}
                </Link>
              ))}
            </LinkList>
          )}
        </div>
      ))}
    </>
  )
}

function Header({ children }: ElementProps<"div">) {
  return <div className={`font-medium w-full block`}>{children}</div>
}

function LinkList({ children }: ElementProps<"div">) {
  return <div className="flex flex-col w-full gap p-1">{children}</div>
}

function Link({ children, className, ...props }: ElementProps<"a">) {
  return (
    <a className={`text-muted ${className || ""}`} {...props}>
      {children}
    </a>
  )
}
