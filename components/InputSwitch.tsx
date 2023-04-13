import LoadingText from 'components/LoadingText'

type Props = {
  name: string
  label: string
  checked: boolean
  onChange: any
}

export default function InputSwitch({ name, label, checked, onChange }: Props) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start">
        <input
          type="checkbox"
          className="toggle-primary toggle"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <span className="label-text ml-2 text-base">
          <LoadingText text={label} skeletonWidth={160} skeletonHeight={24} />
        </span>
      </label>
    </div>
  )
}
