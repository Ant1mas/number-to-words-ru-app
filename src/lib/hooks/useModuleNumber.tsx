import React from 'react'

export function useModuleNumber() {
  const [number, setNumber] = React.useState('-18451302.01')

  const saveNumber = (event) => {
    setNumber(event.target.value.replace(/[^\d.,/-]/g, ''))
  }

  return {
    number,
    saveNumber,
  }
}

export default useModuleNumber
