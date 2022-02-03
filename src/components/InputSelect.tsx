import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

interface item {
  value: string | number
  name: string
}

interface props {
  name: string
  label: string
  value: string | number
  items: item[]
  onChange: any
  minWidth: number
  fullWidth: boolean
}

export function InputSelect(props: props) {
  return (
    <>
      <FormControl
        style={{ minWidth: props.minWidth }}
        fullWidth={props.fullWidth}
        variant="standard"
      >
        <InputLabel id="label-select">{props.label}</InputLabel>
        <Select
          name={props.name}
          labelId="label-select"
          value={props.value}
          onChange={props.onChange}
        >
          {props.items.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </>
  )
}

InputSelect.defaultProps = {
  value: '',
  items: [],
  minWidth: 100,
  fullWidth: false,
}

export default InputSelect
