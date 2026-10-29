# caring-utils

## 演示
```bash
# 运行到 h5 环境
npm run dev
```
## 使用方式

全局引入

import utils from 'caring-utils'

utils.guid()
utils.shuffle([1, 2, 3, 4, 5])
utils.isArray([])
utils.debounce(() => {}, 1000)

局部引入
import { debounce } from 'caring-utils'

// 局部引入模块
import { test } from 'caring-utils'
test.isArray([])

import {uniUtils} from 'caring-utils'
uniUtils.showToast('hello world')
