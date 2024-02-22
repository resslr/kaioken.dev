import "./TabGroup.css"

interface TabGroupProps {
  items: string[]
  value: string
  onSelect: (value: string) => void
}

export function TabGroup(props: TabGroupProps) {
  return (
    <div className="tab-group">
      <ul>
        {props.items.map((item) => {
          const active = item === props.value
          return (
            <li className={active ? "active" : ""}>
              <button onclick={() => !active && props.onSelect(item)}>
                {item}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
