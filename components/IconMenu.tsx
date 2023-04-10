import { useEffect } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import useIconMenu from 'lib/hooks/useIconMenu'
import IconButton from 'components/IconButton'

type Props = {
  iconEl: JSX.Element
  items: string[]
  selected: string
  itemsNames: { [key: string]: string }
  onChange: object
}

export default function IconMenu({
  iconEl,
  items,
  selected,
  itemsNames,
  onChange,
}: Props) {
  const {
    anchorEl,
    onClick,
    onClose,
    onSelect,
    selected: selectedState,
    setSelected,
  } = useIconMenu()
  const open = Boolean(anchorEl)

  useEffect(() => {
    setSelected(selected)
  }, [selected]) // eslint-disable-line

  return (
    <>
      <IconButton
        aria-controls="icon-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={onClick}
      >
        {iconEl}
      </IconButton>
      <Menu
        id="icon-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={onClose}
      >
        {items?.map((item) => {
          const itemStr = item.toString()
          const itemName = itemsNames[itemStr]
          return (
            <MenuItem
              key={itemStr}
              selected={selectedState === itemStr}
              onClick={() => {
                onSelect(itemStr, onChange)
              }}
            >
              {itemName}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}
