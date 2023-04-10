import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

type Props = {
  name: string
  label: string
  checked: boolean
  onChange: any
}

export default function InputSwitch({ name, label, checked, onChange }: Props) {
  return (
    <>
      <FormControlLabel
        control={
          <Switch
            name={name}
            checked={checked}
            onChange={onChange}
            color="primary"
          />
        }
        label={label}
      />
    </>
  )
}
