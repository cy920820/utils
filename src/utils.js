/**
 * Determines whether the passed value is an Array
 * @param {*} obj
 * @return {Boolean}
 */
export function isArray (obj) {
  return Array.isArray(obj)
}

/**
 * Obtain Integer Number Length
 * @param {*} num
 * @return {Number} length
 */
export function getIntLength (num) {
  num = '' + num
  let dotIndex = num.indexOf('.')
  if (dotIndex !== -1) {
    num = num.substring(0, dotIndex)
  }
  return num.length
}

/**
 * Money Unit Converter
 * @param {*} num
 * @return {Number}
 */
export function unitConverter (num) {
  let units = ['元', '万元', '亿', '万亿']
  let dividend = 10000
  let currentNum = num
  let currentUnit = units[0]
  for (let i = 0; i < 4; i++) {
    currentUnit = units[i]
    if (getIntLength(currentNum) < 5) break
    currentNum = currentNum / dividend
  }
  let result = {}
  result.num = currentNum.toFixed(2)
  result.unit = currentUnit
  return result
}
