import React from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { useIconMenu } from 'lib/hooks/useIconMenu'

interface props {
  iconEl: JSX.Element,
  items: string[],
  selected: string,
  itemsNames: { [key: string]: string },
  onChange: object,
}

export function IconMenu(props: props) {
  const { anchorEl, onClick, onClose, onSelect, selected, setSelected } =
    useIconMenu()
  const open = Boolean(anchorEl)

  React.useEffect(() => {
    setSelected(props.selected)
  }, []) // eslint-disable-line

  return (
    <>
      <IconButton
        aria-controls="icon-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={onClick}
      >
        {props.iconEl}
      </IconButton>
      <Menu
        id="icon-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={onClose}
      >
        {props.items?.map((item) => {
          const itemStr = item.toString()
          const itemName = props.itemsNames[itemStr]
          return (
            <MenuItem
              key={itemStr}
              selected={selected === itemStr}
              onClick={() => {
                onSelect(itemStr, props.onChange)
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

IconMenu.defaultProps = {}

export default IconMenu
