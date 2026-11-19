/**
 * @description: 是否是引用类型数组
 * @param {*} arr
 * @return {*}
 */
export const isReferenceArray = (arr) => {
  return arr.some((item) => typeof item === 'object' && item !== null)
}

export function isArray(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  }
  return Object.prototype.toString.call(value) === '[object Array]'
}

// 判断是否为对象
export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

// 判断是否为数字
export function isJsonString(value) {
  if (typeof value !== 'string') {
    return false
  }
  try {
    const obj = JSON.parse(value)
    return typeof obj === 'object' && obj
  } catch (e) {
    return false
  }
}

// 判断是否为字符串
export function isString(value) {
  return typeof value === 'string'
}

// 判断是否为布尔值
export function isFunction(value) {
  return typeof value === 'function'
}

// 判断是否为布尔值
export function isBoolean(value) {
  return typeof value === 'boolean'
}

// 判断是否为null
export function isNull(value) {
  return value === null
}

export function isUndefined(value) {
  return typeof value === 'undefined'
}

export function isPromise(value) {
  return value instanceof Promise
}

export function isRegExp(value) {
  return value instanceof RegExp
}

/**
 * @description: 校验是否短信验证码
 * @param {*} value
 * @param {*} len
 * @return {*}
 */
export function isCode(value, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value)
}

export function isNumber(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)
}

export function isDigits(value) {
  return /^\d+$/.test(value)
}

export function isIdCard(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
    value
  )
}

export function isCarNo(value) {
  // 新能源车牌
  const xreg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
  // 旧车牌
  const creg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
  if (value.length === 7) {
    return creg.test(value)
  }
  if (value.length === 8) {
    return xreg.test(value)
  }
  return false
}

export function isChinese(value) {
  const reg = /^[\u4e00-\u9fa5]+$/gi
  return reg.test(value)
}

export function isLetter(value) {
  const reg = /^[A-Za-z]+$/
  return reg.test(value)
}

export function isLetterAndNumber(value) {
  const reg = /^[A-Za-z0-9]+$/
  return reg.test(value)
}

export function isLetterOrNumber(value) {
  const reg = /^[A-Za-z0-9]+$/
  return reg.test(value)
}

export function isLetterOrChinese(value) {
  const reg = /^[A-Za-z\u4e00-\u9fa5]+$/
  return reg.test(value)
}

export function isLetterAndChinese(value) {
  const reg = /^[A-Za-z\u4e00-\u9fa5]+$/
  return reg.test(value)
}

export function isAmount(value) {
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value)
}

export function isEmail(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(
    value
  )
}

export function isMobile(value) {
  return /^1[23456789]\d{9}$/.test(value)
}

export function isPhone(value) {
  return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value)
}

export function isUrl(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(
    value
  )
}

export function isEmpty(value) {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
        return true
      break
    case 'boolean':
      if (!value) return true
      break
    case 'number':
      if (value === 0 || isNaN(value)) return true
      break
    case 'object':
      if (value === null || value.length === 0) return true
      for (const i in value) {
        return false
      }
      return true
  }
  return false
}
// 判断是否为日期对象或者可被new Date解析的字符串
export function isDate(value) {
  if (!value) return false
  // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
  if (isNumber(value)) value = +value
  return !/Invalid|NaN/.test(new Date(value).toString())
}

// 判断是否为图片
export function isImage(value) {
  const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
  return IMAGE_REGEXP.test(value)
}

// 判断是否为视频
export function isVideo(value) {
  const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
  return VIDEO_REGEXP.test(value)
}

// 判断是否为音频
export function isAudio(value) {
  return /\.(mp3|wav|wma|flac|ape|aac|ogg|m4a|amr)$/.test(value)
}
