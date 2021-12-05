import PropTypes from 'prop-types'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

export default function InputSwitch(props) {
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
}

InputSwitch.defaultProps = {}
