import React from 'react'

type Props = {
  children: React.ReactElement
  [x: string]: any
}

export default function IconButton({ children, ...otherProps }: Props) {
  return (
    <button
      className="relative text-2xl btn-ghost btn-circle btn text-black/50"
      type="button"
      tabIndex={0}
      {...otherProps}
    >
      {children}
    </button>
  )
}
