import React from 'react';

export const useIconMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (name, selectedValue, callback) => {
    setSelected(name);
    callback(name);
    handleClose();
  };

  return {
    anchorEl,
    onClick: handleClick,
    onClose: handleClose,
    onSelect: handleSelect,
    selected,
    setSelected,
  }
}

export default useIconMenu;
