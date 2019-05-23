/**
 * @description 获取一个数的整数位数
 * @param {*} num 传递的数字
 * @returns {Number} length
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
 * @description 金额单位转化
 * @param {*} num 传递的金额
 * @returns {Number}
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
 * @description 确定传递的值是否为数组
 * @param {*} obj 传递的值
 * @returns {Boolean}
 */
export function isArray (obj) {
  return Array.isArray(obj)
}

/**
 * @description 获取一个数的小数位数
 * @param {*} num 传递的数字
 * @return {Number}
 */
export function getDECPOS (num) {
  return Math.ceil(num) === num ? 0 : num.toString().split('.')[1].length
}

/**
 * @description 确定传递的值是否为对象
 * @param {*} obj 传递的值
 * @return {Boolean}
 */
export function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * @description 判断要查询的数组中至少有一项包含在目标数组中
 * @param {Array} target 目标数组
 * @param {Array} arr 要查询的数组
 * @returns {Boolean}
*/
export function hasOneOf(target, arr) {
  return target.some(_ => arr.indexOf(_) > -1)
}

/**
 * @description 验证当前值是否存在验证列表中
 * @param {String|Number} value 被验证的值
 * @param {*} validList 验证列表
 * @returns {Boolean}
*/
export function oneOf(value, validList) {
  return validList.some(_ => {
    if (value === _) {
      return true
    }
    return false
  })
}

/**
 * @description 数字前置补领（指定总长度）
 * @param {String|Number} value 需要前置补零的数
 * @param {Number} len 补零后的长度
 * @returns {Boolean}
*/
export function prefixInteger(value, len) {
  return (Array(len).join(0) + value).slice(-len)
}

/**
 * @description 获取浏览器名称
 * @returns {String}
*/
export function getExplorer() {
  const ua = window.navigator.userAgent
  let isExplorer = (exp) => {
    return ua.indexOf(exp) > -1
  }
  if (isExplorer('MSIE')) return 'MSIE'
  if (isExplorer('Chrome')) return 'Chrome'
  if (isExplorer('Opera')) return 'Opera'
  if (isExplorer('Safari')) return 'Safari'
}

/**
* @description 版本号比较
* @param {String} 版本号v1
* @param {String} 版本号v2
* @return {Number} > 0 则代表v1 > v2
*/

export function compareVersion (v1, v2) {
  let _v1 = v1.split('.')
  let _v2 = v2.split('.')

  let _c = _v1[0] - _v2[0]

  return _c === 0 && v1 !== v2 ? compareVersion(_v1.slice(1).join('.'), _v2.slice(1).join('.')) : _c
}

/**
 * @description 误差检查函数
 * @param {Number} left
 * @param {Number} right
 * @returns {Boolean}
 */
export function withinErrorMargin (left, right) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2)
}

/**
 * @description 判断是否是微信浏览器
 * @returns {Boolean}
 */

export function isWeixinBrowser() {
  var ua = navigator.userAgent.toLowerCase()
  return /micromessenger/.test(ua)
}

/**
 * @description 防抖：防止高频事件执行
 * @scene 表单提交
 * @param {Function} fn
 * @param {Number} delay
 * @returns {Function}
 *  */

export function debounce (fn, delay = 500) {
  if (typeof fn !== 'function') {
    throw new TypeError('Type Error!')
  }

  let timer = null
  return function () {
    timer && clearTimeout(timer)
    setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

/**
* @description 节流：在规定时间内有且仅执行一次事件，降低事件执行频率
* @scene 滚动条scroll事件, 触摸事件等
* @param {Function} fn
* @param {Number} delay
* @returns {Function}
*  */

export function throttle (fn, delay = 500) {
  if (typeof fn !== 'function') {
    throw new TypeError('Type Error!')
  }

  let timer = null
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay)
    }
  }
}
