import { useCommandPallete } from "$/state/commandPallete"
import { Transition, useEffect, useMemo, useModel, useRef } from "kaioken"
import { Modal } from "./dialog/Modal"
import { DialogHeader } from "./dialog/DialogHeader"
import { Input } from "./atoms/Input"
import { docMeta } from "$/docs-meta"
import { DialogBody } from "./dialog/DialogBody"
import { SITE_LINKS } from "$/constants"
import { SearchIcon } from "./icons/SearchIcon"
import { CloseIcon } from "./icons/CloseIcon"

export function CommandPallete() {
  const {
    value: { open, event },
    setOpen,
  } = useCommandPallete()

  const prevActiveElement = useRef<Element>(null)

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardEvent)
    return () => document.removeEventListener("keydown", handleKeyboardEvent)
  }, [])

  function focusSender() {
    const el = prevActiveElement.current
    if (el && el instanceof HTMLElement) el.focus()
  }

  function handleKeyboardEvent(e: KeyboardEvent) {
    const isHandled = e.key.toLowerCase() === "k" && e.ctrlKey
    if (!isHandled) return

    e.preventDefault()
    const {
      value: { open },
      setOpen,
    } = useCommandPallete()

    if (!open) {
      prevActiveElement.current = document.activeElement
    } else {
      focusSender()
    }

    setOpen(!open)
  }

  return (
    <Transition
      in={open}
      timings={[70, 250, 250, 250]}
      element={(state) =>
        state === "exited" ? null : (
          <Modal
            state={state}
            close={() => {
              if (!event) focusSender()
              setOpen(false)
            }}
            sender={event}
            className="max-w-[min(400px,100vw)]"
          >
            <CommandPalleteDisplay />
          </Modal>
        )
      }
    />
  )
}

function CommandPalleteDisplay() {
  const [searchInputRef, searchInputValue] = useModel("")
  const { setOpen } = useCommandPallete()

  useEffect(() => {
    searchInputRef.current?.focus()
  }, [searchInputRef.current])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardEvent)
    return () => document.removeEventListener("keydown", handleKeyboardEvent)
  }, [])

  function handleKeyboardEvent(e: KeyboardEvent) {
    const isHandled = e.key.toLowerCase() === "l" && e.ctrlKey
    if (!isHandled) return
    e.preventDefault()
    searchInputRef.current?.focus()
  }

  const searchTerms = searchInputValue.toLowerCase().split(" ")

  return (
    <>
      <DialogHeader className="border-b-0 relative">
        <SearchIcon className="absolute top-[calc(50%-.75rem)] left-2 opacity-35" />
        <Input
          type="text"
          placeholder="Search..."
          className="w-full bg-stone-100 pl-8 dark:bg-stone-900 !border-opacity-50 font-normal text-base"
          ref={searchInputRef}
        />
        <button
          onclick={() => setOpen(false)}
          className="flex px-2 items-center opacity-35 hover:opacity-100 focus:opacity-100"
        >
          <CloseIcon width="1em" height="1em" />
        </button>
      </DialogHeader>
      <DialogBody className="bg-neutral-100 dark:bg-stone-900 border border-opacity-50 rounded max-h-[400px] overflow-y-auto scroll-py-20">
        <div className="flex flex-col">
          <CommandPalleteGroup
            title="Links"
            items={SITE_LINKS}
            searchTerms={searchTerms}
          />
          <CommandPalleteGroup
            title="API"
            items={docMeta.find((d) => d.title === "API")!.pages!}
            searchTerms={searchTerms}
          />
          <CommandPalleteGroup
            title="Hooks"
            items={docMeta.find((d) => d.title === "Hooks")!.pages!}
            searchTerms={searchTerms}
          />
        </div>
      </DialogBody>
    </>
  )
}

type Item = { title: string; href: string; disabled?: boolean }

function matchItem(terms: string[], keywords: string[]) {
  let matched = 0
  for (let i = 0; i < terms.length; i++) {
    if (keywords.some((k) => k.indexOf(terms[i]) > -1)) matched++
  }
  return matched === terms.length
}

function CommandPalleteGroup({
  title,
  items,
  searchTerms,
}: {
  title: string
  items: Item[]
  searchTerms: string[]
}) {
  const filteredItems = useMemo(
    () =>
      items.filter((item) =>
        matchItem(searchTerms, [
          title.toLowerCase(),
          ...item.title.toLowerCase().split(" "),
        ])
      ),
    [searchTerms]
  )
  if (!filteredItems.length) return null

  return (
    <div className="mb-1 last:mb-0">
      <h4 className="font-bold text-xs text-muted">{title}</h4>
      <div className="flex gap-1 flex-col py-2 px-1">
        {filteredItems.map((item) => (
          <CommandPalleteItem
            item={item}
            external={"external" in item && Boolean(item.external)}
          />
        ))}
      </div>
    </div>
  )
}

function CommandPalleteItem({
  item,
  external,
}: {
  item: Item
  external?: boolean
}) {
  console.log(item)
  if ("disabled" in item && !!item.disabled) {
    return (
      <a className="w-full text-muted opacity-75 bg-light dark:bg-[#221f1faa] border p-2 rounded focus:bg-light-highlight dark:focus:bg-stone-800">
        {item.title}
        <span className="badge">Upcoming</span>
      </a>
    )
  }
  return (
    <a
      className="w-full text-muted bg-light dark:bg-[#221f1faa] border p-2 rounded focus:bg-light-highlight dark:focus:bg-stone-800"
      href={item.href}
      target={external ? "_blank" : "_self"}
    >
      {item.title}
    </a>
  )
}
