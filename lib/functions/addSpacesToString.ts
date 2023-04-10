export function addSpacesToString(string: string, spaces: number): string {
  return string.replace(/\n/g, `\n${' '.repeat(spaces)}`)
}

export default addSpacesToString
