<template>
  <view class="">
    
  </view>
</template>

<script>
import utils from '../../caring-utils/index.js'
import { test } from '../../caring-utils/index.js'
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {
    console.log('🐞===>utils：', utils)
    console.log(utils.guid())
    console.log(utils.shuffle([1, 2, 3, 4, 5]))
    console.log(utils.test.isArray([]))
    console.log(test.isArray({}))
  },
}
</script>
