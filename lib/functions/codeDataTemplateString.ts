
/**
 * Remove extra spaces based on first line.\
 * Use as function.
 * 
 * @param string Template string.
 * @returns Updated string.
 */
export const codeDataTemplateString = (string: string): string => {
  const spacesFirstString = string.substring(1).split('').findIndex((sign) => {
    if (sign !== ' ') {return true}
  });
  const resultString = string.replace(new RegExp(`\n${' '.repeat(spacesFirstString)}`, 'gi'), "\n").trim();
  return resultString;
};

/**
 * Remove extra spaces based on first line.\
 * Use as template string tag.
 * @returns Updated string.
 */
export const codeDataTemplateStringTag = (parts: any, ...keys: any): string => {
  let trimdParts = parts.slice(0, -1);
  const spacesFirstString = trimdParts[0].substring(1).split('').findIndex((sign) => {
    if (sign !== ' ') {return true}
  });
  const stringWithExtraSpaces = "\n" + ' '.repeat(spacesFirstString);
  let resultString = "";
  parts.some((part, index) => {
    const partWithoutExtraSpaces = part.replace(new RegExp(stringWithExtraSpaces, 'gi'), "\n");
    resultString += partWithoutExtraSpaces;
    resultString += keys[index] !== undefined ? keys[index] : '';
  });
  resultString = resultString.trim();
  return resultString;
};

export default codeDataTemplateString;
