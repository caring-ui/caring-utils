/*
 * @Author: Wanko
 * @Date: 2022-06-27 10:20:14
 * @LastEditors: Wanko
 * @LastEditTime: 2024-05-29 17:21:41
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
  timeFormat,
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
} from './lib/js/index'

// 单独导出
export {
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
  setProperty,
  getQueryParams,
  isReferenceArray,
  unique
}

/// 默认导出
export default {
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
  setProperty,
  getQueryParams,
  isReferenceArray,
  unique
}
