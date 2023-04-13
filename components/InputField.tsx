import LoadingText from 'components/LoadingText'

type Props = {
  name?: string
  type?: string
  className?: string
  placeholder?: string
  value?: any
  label?: string
  helperText?: string
  onChange?: any
  [key: string]: any
}

export default function InputField({
  name = '',
  type = 'text',
  className,
  placeholder,
  value,
  label = '',
  helperText = '',
  onChange,
  ...other
}: Props) {
  return (
    <div className="form-control">
      {label.length > 0 ? (
        <label className="pt-1 pb-2 label">
          <span className="label-text">
            <LoadingText text={label} skeletonWidth={100} skeletonHeight={20} />
          </span>
        </label>
      ) : null}
      <input
        name={name}
        type={type}
        className={`input-bordered input ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...other}
      />
      <label className="label pt-0.5">
        <span className="label-text-alt">
          <LoadingText
            text={helperText}
            skeletonWidth={300}
            skeletonHeight={16}
          />
        </span>
      </label>
    </div>
  )
}
