<template>
  <view class="h-screen bg-f8 overflow-hidden">
    <div class="m p rounded hover text-red bg-red-light" @click="onShowToast">
      toast
    </div>
    <div class="m p rounded bg-white hover" @click="showModal">modal</div>
    <div class="m p rounded bg-white hover" @click="onShowLoading">loading</div>
  </view>
</template>

<script>
// import utils from '../../caring-utils/index.js'
import utils from 'caring-utils'
import { test, uniUtils, isArray, modal } from '../../caring-utils/index.js'
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
    console.log('🐞===>utils：', utils)
    console.log(utils.guid())
    console.log(utils.shuffle([1, 2, 3, 4, 5]))
    console.log(utils.isArray([]))
    console.log(isArray([]))
    console.log(test.isArray([]))

    console.log(utils.debounce(() => {}, 1000))
  },
  methods: {
    async onShowLoading() {
      utils.showLoading()
      await utils.sleep(1000)
      utils.hideLoading()
    },
    onShowToast() {
      uniUtils.showToast('hello world')
    },
    showModal() {
      modal('hello world')
    }
  }
}
</script>
