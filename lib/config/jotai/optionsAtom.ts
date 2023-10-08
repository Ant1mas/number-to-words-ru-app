import { atom } from 'jotai'

import DEFAULT_CURRENCY_OBJECT from '@/lib/constants/defaultCurrencyObject'
import DEFAULT_MODULE_OPTIONS from '@/lib/constants/defaultModuleOptions'

export const optionsAtom = atom({
  ...DEFAULT_MODULE_OPTIONS,
  customCurrency: DEFAULT_CURRENCY_OBJECT,
})
