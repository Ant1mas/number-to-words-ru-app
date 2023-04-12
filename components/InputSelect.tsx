type Item = {
  value: string | number
  name: string
}

type Props = {
  name: string
  label: string
  value: string | number
  items: Item[]
  canHaveEmptyValue?: boolean
  onChange: any
}

export default function InputSelect({
  name,
  label,
  value = '',
  items = [],
  canHaveEmptyValue = false,
  onChange,
}: Props) {
  return (
    <div className="form-control">
      <label className="label py-1">
        <span className="label-text">{label}</span>
      </label>
      <select
        className="select-bordered select"
        name={name}
        onChange={onChange}
      >
        {canHaveEmptyValue ? <option value=""></option> : null}
        {items.map((item) => {
          return (
            <option
              key={item.value}
              value={item.value}
              selected={value === item.value}
            >
              {item.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
