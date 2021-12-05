export const objectToString = (object) => {
  return JSON.stringify(object, null, 2)
    .replace(/{/, '') // Убрать "{" в начале кода
    .split('')
    .reverse()
    .join('')
    .replace(/}/, '')
    .split('')
    .reverse()
    .join('') // Убрать "}" в конце кода
    .replace(/("[a-zA-Z]+"[:])/g, (str) => str.replace(/"/g, '')) // Убрать двойные кавычки в названиях свойств
    .trim()
}

export default objectToString
