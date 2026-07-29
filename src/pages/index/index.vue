<template>
  <view class="">
    
  </view>
</template>

<script>
import utils from '../../caring-utils/dist/index.js'
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
  },
}
</script>
