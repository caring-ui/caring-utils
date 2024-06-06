/*
 * @Author: Wanko
 * @Date: 2022-06-27 10:20:14
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-06 16:52:08
 * @Description:
 */
import debounce from './lib/js/debounce'
import throttle from './lib/js/throttle'

import {
  range,
  sleep,
  random,
  guid,
  deepClone,
  deepMerge,
  randomArray,
  timeFrom,
  trim,
  queryParams,
  getParams,
  priceFormat,
  padZero,
  getProperty,
  setProperty,
  getQueryParams,
  isReferenceArray,
  unique,
  shuffle
} from './lib/js/index'

// 单独导出
export {
  shuffle,
  debounce,
  throttle,
  range,
  sleep,
  random,
  guid,
  deepClone,
  deepMerge,
  randomArray,
  timeFrom,
  trim,
  queryParams,
  getParams,
  priceFormat,
  padZero,
  getProperty,
  setProperty,
  getQueryParams,
  isReferenceArray,
  unique
}

/// 默认导出
export default {
  shuffle,
  debounce,
  throttle,
  range,
  sleep,
  random,
  guid,
  deepClone,
  deepMerge,
  randomArray,
  timeFrom,
  trim,
  queryParams,
  getParams,
  priceFormat,
  padZero,
  getProperty,
  setProperty,
  getQueryParams,
  isReferenceArray,
  unique
}
