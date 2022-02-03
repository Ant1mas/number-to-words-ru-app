import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

interface props {
  name: string
  label: string
  checked: boolean
  onChange: any
}

export function InputSwitch(props: props) {
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

InputSwitch.defaultProps = {}

export default InputSwitch
