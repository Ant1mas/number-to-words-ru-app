import { atom } from 'jotai'

export const numberAtom = atom('-18451302.01')

export const formatNumber = (number: string): string => {
  return number.replace(/[^\d.,/-]/g, '')
}
