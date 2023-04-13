import LoadingText from 'components/LoadingText'

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
      <label className="py-1 label">
        <span className="label-text">
          <LoadingText text={label} skeletonWidth={220} skeletonHeight={20} />
        </span>
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
