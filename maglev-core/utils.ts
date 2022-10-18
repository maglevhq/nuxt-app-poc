export const camelize = (str, uppercase_first_letter = false) => {
  let newStr = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())

  if (uppercase_first_letter) 
    newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1)

  return newStr
}