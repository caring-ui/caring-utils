import {isArray} from 'caring-test'

/**
 * 如果value小于min，取min；如果value大于max，取max
 */
const range = (min = 0, max = 0, value = 0) => Math.max(min, Math.min(max, Number(value)))
/**
 * 取一个区间数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 */
const random = (min, max) => {
  if (min >= 0 && max > 0 && max >= min) {
    const gab = max - min + 1
    return Math.floor(Math.random() * gab + min)
  }
  return 0
}


/**
 * 进行延时，以达到可以简写代码的目的，比如
 * await sleep(20)将会阻塞20ms
 */
const sleep = (value = 30) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, value)
  })
}

/**
 * 去除空格
 */
const trim = (str, pos = 'both') => {
  str = String(str)
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, '')
  }
  if (pos == 'left') {
    return str.replace(/^\s*/, '')
  }
  if (pos == 'right') {
    return str.replace(/(\s*$)/g, '')
  }
  if (pos == 'all') {
    return str.replace(/\s+/g, '')
  }
  return str
}

/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier)
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
const guid = (len = 32, firstU = true, radix = null) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  radix = radix || chars.length

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    let r
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift()
    return `u${uuid.join('')}`
  }
  return uuid.join('')
}

// 深度克隆
function deepClone (obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj
  }
  const o = isArray(obj) ? [] : {}
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return o
}

// JS对象深度合并
function deepMerge (target = {}, source = {}) {
  target = deepClone(target)
  if (typeof target !== 'object' || typeof source !== 'object') return false
  for (const prop in source) {
    if (!source.hasOwnProperty(prop)) continue
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop]
      } else if (typeof source[prop] !== 'object') {
        target[prop] = source[prop]
      } else if (target[prop].concat && source[prop].concat) {
        target[prop] = target[prop].concat(source[prop])
      } else {
        target[prop] = deepMerge(target[prop], source[prop])
      }
    } else {
      target[prop] = source[prop]
    }
  }
  return target
}

// 打乱数组
function randomArray (array = []) {
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(() => Math.random() - 0.5)
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat (dateTime = null, fmt = 'yyyy-mm-dd') {
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date())
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000
  const date = new Date(dateTime)
  let ret
  const opt = {
    'y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'h+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    's+': date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (const k in opt) {
    ret = new RegExp(`(${k})`).exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
    }
  }
  return fmt
}

/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
function timeFrom (timestamp = null, format = 'yyyy-mm-dd') {
  if (timestamp == null) timestamp = Number(new Date())
  timestamp = parseInt(timestamp)
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000
  let timer = (new Date()).getTime() - timestamp
  timer = parseInt(timer / 1000)
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  let tips = ''
  switch (true) {
    case timer < 300:
      tips = '刚刚'
      break
    case timer >= 300 && timer < 3600:
      tips = `${parseInt(timer / 60)}分钟前`
      break
    case timer >= 3600 && timer < 86400:
      tips = `${parseInt(timer / 3600)}小时前`
      break
    case timer >= 86400 && timer < 2592000:
      tips = `${parseInt(timer / 86400)}天前`
      break
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = `${parseInt(timer / (86400 * 30))}个月前`
        } else {
          tips = `${parseInt(timer / (86400 * 365))}年前`
        }
      } else {
        tips = timeFormat(timestamp, format)
      }
  }
  return tips
}

/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
function queryParams (data = {}, isPrefix = true, arrayFormat = 'brackets') {
  const prefix = isPrefix ? '?' : ''
  const _result = []
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets'
  for (const key in data) {
    const value = data[key]
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      continue
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (let i = 0; i < value.length; i++) {
            _result.push(`${key}[${i}]=${value[i]}`)
          }
          break
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`)
          })
          break
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach((_value) => {
            _result.push(`${key}=${_value}`)
          })
          break
        case 'comma':
          // 结果: ids=1,2,3
          let commaStr = ''
          value.forEach((_value) => {
            commaStr += (commaStr ? ',' : '') + _value
          })
          _result.push(`${key}=${commaStr}`)
          break
        default:
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`)
          })
      }
    } else {
      _result.push(`${key}=${value}`)
    }
  }
  return _result.length ? prefix + _result.join('&') : ''
}

/* 
 varibale: 要查找的参数
 url: 参数所在的路径
 index: ?所在的索引位置
 */
function getParams(variable, url = location.href, index=1) {
	const _href = decodeURIComponent(url)
	if (_href.indexOf('?') < 0) {
		return false
	}
	const query = _href.split('?')[index]
	const vars = query.split('&')
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=')
		if (pair[0].toLowerCase() === variable.toLowerCase()) {
			return pair[1]
		}
	}
	return false
}

/*
 * 参数说明：
 * number：要格式化的数字
 * decimals：保留几位小数
 * decimalPoint：小数点符号
 * thousandsSeparator：千分位符号
 * */
function priceFormat (number, decimals = 0, decimalPoint = '.', thousandsSeparator = ',') {
  number = (`${number}`).replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = (typeof thousandsSeparator === 'undefined') ? ',' : thousandsSeparator
  const dec = (typeof decimalPoint === 'undefined') ? '.' : decimalPoint
  let s = ''
  const toFixedFix = function (n, prec) {
    const k = 10 ** prec
    return `${Math.ceil(n * k) / k}`
  }

  s = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`)
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

// 日期的月或日补零操作
function padZero (value) {
  return `00${value}`.slice(-2)
}

// 获取某个对象下的属性，用于通过类似'a.b.c'的形式去获取一个对象的的属性的形式
function getProperty (obj, key) {
  if (!obj) {
    return
  }
  if (typeof key !== 'string' || key === '') {
    return ''
  }
  if (key.indexOf('.') !== -1) {
    const keys = key.split('.')
    let firstObj = obj[keys[0]] || {}

    for (let i = 1; i < keys.length; i++) {
      if (firstObj) {
        firstObj = firstObj[keys[i]]
      }
    }
    return firstObj
  }
  return obj[key]
}

// 设置对象的属性值，如果'a.b.c'的形式进行设置
function setProperty (obj, key, value) {
  if (!obj) {
    return
  }
  // 递归赋值
  const inFn = function (_obj, keys, v) {
    // 最后一个属性key
    if (keys.length === 1) {
      _obj[keys[0]] = v
      return
    }
    // 0~length-1个key
    while (keys.length > 1) {
      const k = keys[0]
      if (!_obj[k] || (typeof _obj[k] !== 'object')) {
        _obj[k] = {}
      }
      const key = keys.shift()
      // 自调用判断是否存在属性，不存在则自动创建对象
      inFn(_obj[k], keys, v)
    }
  }

  if (typeof key !== 'string' || key === '') {

  } else if (key.indexOf('.') !== -1) { // 支持多层级赋值操作
    const keys = key.split('.')
    inFn(obj, keys, value)
  } else {
    obj[key] = value
  }
}

function getQueryParams(url, paramName = null) {
  let queryParams = {}
  let queryString = url.split('?')[1]

  if (queryString) {
    let params = queryString.split('&')
    params.forEach((param) => {
      let [key, value] = param.split('=')
      queryParams[decodeURIComponent(key)] = decodeURIComponent(value)
    })
  }

  if (paramName) {
    return queryParams[paramName] || null
  }

  return queryParams
}

function isReferenceArray(arr) {
  return arr.some((item) => typeof item === 'object' && item !== null)
}

function unique(arr, key) {
  if(!isArray(arr)) return []
  if (!isReferenceArray(arr)) {
    return [...new Set(arr)]
  }

  const seen = new Set()
  return arr.reduce((result, item) => {
    const keyValue = key ? item[key] : JSON.stringify(item)
    if (!seen.has(keyValue)) {
      seen.add(keyValue)
      result.push(item)
    }
    return result
  }, [])
}

export {
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

