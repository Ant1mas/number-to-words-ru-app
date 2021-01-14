import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';

// import styles from "./IconMenu.module.sass"
import { useIconMenu } from 'lib/hooks/useIconMenu'

const IconMenu = ( props ) => {
  const {anchorEl, onClick, onClose, onSelect, selected, setSelected} = useIconMenu();

  React.useEffect(() => {
    setSelected(props.selected);
  }, [])

  return (
    <>
      <IconButton aria-controls="icon-menu" onClick={onClick}>
        {props.iconEl}
      </IconButton>
      <Menu
        id="icon-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}
      >
        {
          props.items.map((item) => {
            const itemStr = item.toString();
            const itemName = props.itemsNames[itemStr];
            return (
              <MenuItem
                key={itemStr}
                onClick={() => {
                  onSelect(itemStr, props.selected, props.onChange);
                }}
                selected={selected === itemStr}
              >
                {itemName}
              </MenuItem>
            )
          })
        }
      </Menu>
    </>
  )
}

IconMenu.propTypes = {
  iconEl: PropTypes.element,
  items: PropTypes.array,
  selected: PropTypes.string,
  itemsNames: PropTypes.object,
  onChange: PropTypes.func,
};

IconMenu.defaultProps = {
  
};

export default IconMenu;
