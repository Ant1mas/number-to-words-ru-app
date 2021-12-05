export const addSpacesToString = (string, spaces) => {
  return string.replace(/\n/g, `\n${' '.repeat(spaces)}`)
}

export default addSpacesToString
