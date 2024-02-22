import { useState } from "kaioken"
import "./TabGroup.css"

type TabGroupItem = {
  text: string
  element: () => JSX.Element
}

interface TabGroupProps {
  items: TabGroupItem[]
}

export function TabGroup(props: TabGroupProps) {
  const [selectedItem, setSelectedItem] = useState(props.items[0].text)

  const Component = props.items.find((i) => i.text === selectedItem)!.element

  return (
    <div className="tab-group">
      <ul>
        {props.items.map((item) => {
          const active = item.text === selectedItem
          return (
            <li className={active ? "active" : ""}>
              <button onclick={() => !active && setSelectedItem(item.text)}>
                {item.text}
              </button>
            </li>
          )
        })}
      </ul>
      <div>
        <Component />
      </div>
    </div>
  )
}
