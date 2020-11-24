//基本request请求
function requestBase(url, data, method, func) {
  wx.request({
    url: url,
    data: data,
    header: {
      'content-type': 'application/json'
    },
    method: method,
    success: function (res) {
      func(res.data)
      // console.log('success')
    },
    fail: function (res) {
      console.log('submit fail');
    }
  })
}

module.exports = {
  requestBase: requestBase
}