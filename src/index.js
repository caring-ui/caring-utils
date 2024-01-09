/*
 * @Author: Wanko
 * @Date: 2022-06-27 10:20:14
 * @LastEditors: Wanko
 * @LastEditTime: 2024-01-09 11:21:19
 * @Description:
 */
import debounce from './js/debounce'
import throttle from './js/throttle'
import test from './js/test'
// import * as utils from './js'

import {
  range,
  sleep,
  random,
  guid,
  deepClone,
  deepMerge,
  randomArray,
  timeFormat,
  timeFrom,
  trim,
  queryParams,
  getParams,
  priceFormat,
  padZero,
  getProperty,
  setProperty
} from './js/index'

// 单独导出
export {
  test,
  debounce,
  throttle,
  range,
  sleep,
  random,
  guid,
  deepClone,
  deepMerge,
  randomArray,
  timeFormat,
  timeFrom,
  trim,
  queryParams,
  getParams,
  priceFormat,
  padZero,
  getProperty,
  setProperty
}

/// 默认导出
export default {
  debounce,
  throttle,
  test,
  range,
  sleep,
  random,
  guid,
  deepClone,
  deepMerge,
  randomArray,
  timeFormat,
  timeFrom,
  trim,
  queryParams,
  getParams,
  priceFormat,
  padZero,
  getProperty,
  setProperty
}
