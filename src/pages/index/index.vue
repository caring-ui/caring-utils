<template>
  <view class="h-screen bg-f8 overflow-hidden">
    <div class="m p rounded hover text-red bg-red-light" @click="showToast">
      toast
    </div>
    <div class="m p rounded bg-white hover" @click="showModal">
      modal
    </div>
  </view>
</template>

<script>
import utils from '../../caring-utils/index.js'
import { test, toast, isArray, modal } from '../../caring-utils/index.js'
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
    console.log(isArray({}))
  },
  methods: {
    showToast() {
      toast('hello world')
    },
    showModal() {
      modal('hello world')
    }
  },
}
</script>
