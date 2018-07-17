'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntLength = getIntLength;
exports.unitConverter = unitConverter;
exports.isArray = isArray;
exports.getDECPOS = getDECPOS;
/**
 * Obtain Integer Number Length
 * @param {*} num
 * @return {Number} length
 */
function getIntLength(num) {
  num = '' + num;
  var dotIndex = num.indexOf('.');
  if (dotIndex !== -1) {
    num = num.substring(0, dotIndex);
  }
  return num.length;
}

/**
 * Money Unit Converter
 * @param {*} num
 * @return {Number}
 */
function unitConverter(num) {
  var units = ['元', '万元', '亿', '万亿'];
  var dividend = 10000;
  var currentNum = num;
  var currentUnit = units[0];
  for (var i = 0; i < 4; i++) {
    currentUnit = units[i];
    if (getIntLength(currentNum) < 5) break;
    currentNum = currentNum / dividend;
  }
  var result = {};
  result.num = currentNum.toFixed(2);
  result.unit = currentUnit;
  return result;
}

/**
 * Determines whether the passed value is an Array
 * @param {*} obj
 * @return {Boolean}
 */
function isArray(obj) {
  return Array.isArray(obj);
}

/**
 * Get decimals digit
 * @param {*} num
 * @return {Number}
 */
function getDECPOS(num) {
  return Math.ceil(num) === num ? 0 : num.toString().split('.')[1].length;
}
//# sourceMappingURL=utils.js.map