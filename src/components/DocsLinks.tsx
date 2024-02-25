import { usePageContext } from "$/context/pageContext"
import { DocItem as DocItemMeta, docMeta } from "$/docs-meta"
import { useNavDrawer } from "$/state/navDrawer"
import { isLinkActive } from "$/utils"
import { ElementProps } from "kaioken"

export function SidebarContent() {
  return (
    <>
      {docMeta.map((meta) => (
        <DocItem data={meta} />
      ))}
    </>
  )
}

function DocItem({ data }: { data: DocItemMeta }) {
  const { urlPathname } = usePageContext()
  const { setOpen } = useNavDrawer()

  const active = isLinkActive(data.href, urlPathname)

  return (
    <div className="mb-3">
      <Header
        href={active ? data.href + "#" : data.href}
        onclick={() => setOpen(false)}
      >
        {data.title}
      </Header>
      {data.pages && (
        <LinkList>
          {data.pages.map((page) => (
            <Link href={page.href}>{page.title}</Link>
          ))}
        </LinkList>
      )}
      {data.sections && (
        <LinkList>
          {data.sections.map((section) => (
            <Link
              href={`${data.href}#${section.id}`}
              onclick={() => setOpen(false)}
            >
              {section.title}
            </Link>
          ))}
        </LinkList>
      )}
    </div>
  )
}

function Header({ children, ...props }: ElementProps<"a">) {
  return (
    <div className={`font-medium w-full block`}>
      <a {...props} className="block">
        {children}
      </a>
    </div>
  )
}

function LinkList({ children }: ElementProps<"div">) {
  return <div className="flex flex-col w-full gap p-1">{children}</div>
}

function Link({ children, ...props }: ElementProps<"a">) {
  return (
    <a className="text-muted" {...props}>
      {children}
    </a>
  )
}
