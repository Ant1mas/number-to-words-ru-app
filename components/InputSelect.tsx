import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

type Item = {
  value: string | number
  name: string
}

type Props = {
  name: string
  label: string
  value: string | number
  items: Item[]
  minWidth: number
  fullWidth: boolean
  onChange: any
}

export default function InputSelect({
  name,
  label,
  value = '',
  items = [],
  minWidth = 100,
  fullWidth = false,
  onChange,
}: Props) {
  return (
    <>
      <FormControl
        style={{ minWidth: minWidth }}
        fullWidth={fullWidth}
        variant="standard"
      >
        <InputLabel id="label-select">{label}</InputLabel>
        <Select
          name={name}
          labelId="label-select"
          value={value}
          onChange={onChange}
        >
          {items.map((item) => {
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
