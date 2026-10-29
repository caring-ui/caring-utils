
// 工具函数
export * from './lib/utils.js'
import * as utils from './lib/utils.js'

// 正则表达式工具函数
export * from './lib/test.js'
import * as test from './lib/test.js'
export {test}

// uni-app 工具函数
export * from './lib/uniUtils.js'
import * as uniUtils from './lib/uniUtils.js'
export {uniUtils}


export default {
  ...utils,
  ...test,
  ...uniUtils
}
