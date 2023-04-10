import { useState } from 'react'

export default function useIconMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selected, setSelected] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (name, callback) => {
    setSelected(name)
    callback(name)
    handleClose()
  }

  return {
    anchorEl,
    onClick: handleClick,
    onClose: handleClose,
    onSelect: handleSelect,
    selected,
    setSelected,
  }
}
