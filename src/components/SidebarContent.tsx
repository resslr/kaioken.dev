import {
  Derive,
  ElementProps,
  Fragment,
  unwrap,
  useEffect,
  useSignal,
} from "kiru"
import { className as cls } from "kiru/utils"
import { usePageContext } from "$/context/pageContext"
import { docMeta } from "$/docs-meta"
import { useNavDrawer } from "$/state/navDrawer"
import { isLinkActive } from "$/utils"
import { DocItemStatus } from "./DocItemStatus"

export function SidebarContent() {
  const { urlPathname, urlParsed } = usePageContext()
  const { value: open, setOpen } = useNavDrawer((state) => state.open)
  const hash = useSignal(urlParsed.hash)

  useEffect(() => {
    const onHashChange = () => {
      hash.value = window.location.hash.substring(1)
    }
    window.addEventListener("hashchange", onHashChange)
    return () => {
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [])

  return (
    <>
      {docMeta.map((data) => (
        <div key={data.title} className="px-1 mb-3">
          <Header>
            {data.href ? (
              <a
                href={data.href}
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
              {data.pages.map((page) => {
                const isActive = isLinkActive(page.href, urlPathname)
                let hasNewSection = false
                if (page.status?.type !== "new") {
                  hasNewSection = !!page.sections?.some((s) => s.isNew)
                }

                const Tag = page.sections ? "div" : Fragment

                return (
                  <Tag key={page.href}>
                    {page.disabled ? (
                      <Link key={page.title}>
                        <span className="opacity-75">{page.title}</span>
                        <span className="badge">Upcoming</span>
                      </Link>
                    ) : (
                      <Link
                        key={page.href}
                        href={page.href}
                        onclick={() =>
                          isLinkActive(page.href, urlPathname) &&
                          open &&
                          setOpen(false)
                        }
                        isActive={isActive}
                      >
                        {page.title}
                        <DocItemStatus
                          status={page.status}
                          hasNewSection={hasNewSection}
                        />
                      </Link>
                    )}
                    <Derive from={hash}>
                      {(hash) =>
                        isActive &&
                        page.sections && (
                          <LinkList className="px-2 py-1 my-2 bg-white/5 text-sm rounded border border-white/5">
                            {page.sections.map((section) => (
                              <Link
                                isActive={section.id === hash}
                                key={section.id}
                                href={
                                  page.href +
                                  (section.id ? `#${section.id}` : "")
                                }
                                onclick={() => open && setOpen(false)}
                              >
                                {section.title}
                                {section.isNew && (
                                  <span
                                    className="badge p-0.5 px-1"
                                    title={`Since ${section.isNew.since}`}
                                  >
                                    New
                                  </span>
                                )}
                              </Link>
                            ))}
                          </LinkList>
                        )
                      }
                    </Derive>
                  </Tag>
                )
              })}
            </LinkList>
          )}
          {data.sections && (
            <LinkList>
              {data.sections.map((section) => (
                <Link
                  key={section.id}
                  href={data.href + (section.id ? `#${section.id}` : "")}
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

function LinkList({ className, ...props }: ElementProps<"div">) {
  return (
    <div
      className={cls("flex flex-col w-full gap", unwrap(className))}
      {...props}
    />
  )
}

function Link({
  isActive,
  children,
  ...props
}: ElementProps<"a"> & { isActive?: boolean }) {
  return (
    <a
      className={`flex items-center justify-between ${isActive ? "text-light" : "text-muted"}`}
      {...props}
    >
      {children}
    </a>
  )
}
