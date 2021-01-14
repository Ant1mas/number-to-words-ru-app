import PropTypes from 'prop-types';
import {
  FormControlLabel,
  Switch,
} from '@material-ui/core';

// import styles from "./InputSwitch.module.sass"

const InputSwitch = ( props ) => {
  return (
    <>
      <FormControlLabel
        control={
          <Switch
            name={props.name}
            checked={props.checked}
            onChange={props.onChange}
            color="primary"
          />
        }
        label={props.label}
      />
    </>
  )
}

InputSwitch.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

InputSwitch.defaultProps = {
  
};

export default InputSwitch;
