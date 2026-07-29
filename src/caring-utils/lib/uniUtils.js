/**
 * @description: 返回平台的名称，为小写的ios或android
 * @return {*}
 */
export const os = () => {
  return uni.getSystemInfoSync().platform.toLowerCase()
}

/**
 * @description: 获取设备的信息
 * @return {*}
 */
export const sys = () => {
  return uni.getSystemInfoSync()
}

/**
 * @description: 获取当前页面路径
 * @return {*}
 */
export const page = () => {
  const pages = getCurrentPages()
  return `/${getCurrentPages()[pages.length - 1].route}`
}

/**
 * @description: 对uniAPI的二次封装
 * @return {*}
 */
export const modal = (option) => {
  let title = '提示',
    content = '',
    showCancel = true,
    cancelText = '取消',
    confirmText = '确定',
    confirmColor = uni.$c ? uni.$c.color.primary : ''

  if (typeof option === 'string') {
    content = option
  } else if (typeof option === 'object' && option !== null) {
    ;({
      title = title,
      content = content,
      showCancel = showCancel,
      cancelText = cancelText,
      confirmText = confirmText,
      confirmColor = confirmColor
    } = option)
  }

  return new Promise((resolve, reject) => {
    // uni的showModal 默认形式为：title 和 content 为空字符串，同时展示取消和确定按钮
    uni.showModal({
      title,
      content,
      showCancel,
      cancelText,
      confirmText,
      confirmColor,
      success: (res) => {
        console.log(res)
        if (res.confirm) {
          resolve()
        } else if (res.cancel) {
          reject()
        }
      }
    })
  })
}

export const loading = (title = '数据加载中') => {
  uni.showLoading({
    title,
    mask: true
  })
}

export const hideLoading = () => {
  uni.hideLoading()
}

/**
 * @description: 设置navBar的标题
 * @param {*} title
 * @return {*}
 */
export const title = (title = '') => {
  if (typeof title !== 'string') title = ''
  // 去除两侧空格
  title = title.replace(/^\s+|\s+$/g, '')
  return new Promise((resolve, reject) => {
    uni.setNavigationBarTitle({
      title,
      success: () => {
        resolve()
      },
      fail: () => {
        reject()
      }
    })
  })
}

export const toast = (
  title = '未知错误信息',
  { duration = 1000, mask = true, icon = 'none' } = {}
) => {
  return new Promise((resolve, reject) => {
    if (title.length <= 20) {
      uni.showToast({
        title: String(title),
        icon,
        mask,
        duration,
        success: () => {
          resolve()
        },
        fail: () => {
          reject()
        }
      })
    } else {
      modal({
        content: title,
        showCancel: false
      })
        .then(resolve)
        .catch(reject)
    }
  })
}

export const copy = (data) => {
  return new Promise((resolve, reject) => {
    uni.setClipboardData({
      data,
      success: () => {
        resolve()
      },
      fail: () => {
        reject()
      }
    })
  })
}

export const previewImage = (urls, current = 0) => {
  if (typeof urls === 'string') urls = [urls]
  else if (Array.isArray(urls)) urls = urls
  else return
  uni.previewImage({
    current,
    urls
  })
}
