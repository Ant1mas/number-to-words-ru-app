import React from 'react'
import { useModuleNumber } from 'lib/hooks/useModuleNumber'
import { useModuleOptions } from 'lib/hooks/useModuleOptions'

export const ModuleParamsContext = React.createContext(undefined)

export default function ModuleParamsProvider(props) {
  const { number, saveNumber } = useModuleNumber()
  const { options, optionsForModule, optionsDifferences, updateOptions } =
    useModuleOptions()

  return (
    <ModuleParamsContext.Provider
      value={{
        number,
        saveNumber,
        options,
        optionsForModule,
        optionsDifferences,
        updateOptions,
      }}
    >
      {props.children}
    </ModuleParamsContext.Provider>
  )
}
