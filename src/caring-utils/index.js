import debounce from './lib/debounce'
import throttle from './lib/throttle'

export * from './lib/utils.js'
import * as utils from './lib/utils.js'

export * from './lib/test.js'
import * as test from './lib/test.js'
export {test}

export * from './lib/uniUtils.js'
import * as uniUtils from './lib/uniUtils.js'
export {uniUtils}


export default {
  ...utils,
  debounce,
  throttle,
  test,
  uniUtils
}
