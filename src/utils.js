/**
 * 获取一个数的整数位数
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
 * 金额单位转化
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

/**
 * 确定传递的值是否为数组
 * @param {*} obj
 * @return {Boolean}
 */
export function isArray (obj) {
  return Array.isArray(obj)
}

/**
 * 获取一个数的小数位数
 * @param {*} num
 * @return {Number}
 */
export function getDECPOS (num) {
  return Math.ceil(num) === num ? 0 : num.toString().split('.')[1].length
}

/**
 * 确定传递的值是否为对象
 * @param {*} obj
 * @return {Boolean}
 */
export function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
