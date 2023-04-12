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
        <label className="label pb-2 pt-1">
          <span className="label-text">{label}</span>
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
        <span className="label-text-alt">{helperText}</span>
      </label>
    </div>
  )
}
