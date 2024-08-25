import "./TabGroup.css"

interface TabGroupProps {
  items: string[]
  value: string
  onSelect: (value: string) => void
  itemSuffix?: string | ((item: string) => string)
}

export function TabGroup(props: TabGroupProps) {
  return (
    <div className="tab-group">
      <ul>
        {props.items.map((item) => {
          const active = item === props.value
          return (
            <li key={item} className={active ? "active" : ""}>
              <button
                ariaLabel={item}
                onclick={() => !active && props.onSelect(item)}
              >
                {item}
                {typeof props.itemSuffix === "function"
                  ? props.itemSuffix(item)
                  : typeof props.itemSuffix === "string"
                    ? props.itemSuffix
                    : ""}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
