import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'

type Props = {
  children: React.ReactElement
  items: string[]
  itemsNames: { [key: string]: string }
  selected: string
  onChange: Function
}

export default function MenuButton({
  children,
  items,
  itemsNames,
  selected,
  onChange,
}: Props) {
  const [selectedName, setSelectedName] = useState<string>(selected)
  const menuRef = useRef(null)

  useEffect(() => {
    const allMenuItems = menuRef.current?.querySelectorAll(
      `button[data-item-name]`,
    )
    allMenuItems.forEach((menuItemNode) => {
      menuItemNode.classList.remove('active')
    })
    const selectedItem = menuRef.current?.querySelector(
      `[data-item-name=${selectedName}]`,
    )
    selectedItem.classList.add('active')
    onChange(selectedName)
    setTimeout(() => {
      ;(document.activeElement as HTMLElement).blur()
    }, 50)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedName])

  return (
    <div className={clsx('dropdown-end dropdown')}>
      {children}
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box mt-1 w-28 bg-white p-2 shadow-md"
        ref={menuRef}
      >
        {items?.map((item) => {
          return (
            <li key={item}>
              <button
                data-item-name={item}
                onClick={() => {
                  setSelectedName(item)
                }}
              >
                {itemsNames[item]}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
