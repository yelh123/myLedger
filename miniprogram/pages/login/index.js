var that
Page({

  data: {

  },

  onLoad: function (options) {
    that = this
  },

  onReady: function () {

  },

  onShow: function () {

  },

  getUserProfile() {
    wx.getUserProfile({
      desc: '用于头像与昵称展示', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        wx.setStorageSync('userInfo', res.userInfo)
        that.getOpenId()
      }
    })
  },

  getOpenId(e) {
    wx.showLoading({
      title: '',
    })
    wx.cloud.callFunction({
      name: 'carFinancialFunctions',
      config: {
        env: getApp().globalData.env_id
      },
      data: {
        type: 'getOpenId'
      }
    }).then((res) => {
      console.log(res)
      wx.setStorageSync("openId", res.result.openid)
      wx.hideLoading()
      setTimeout(function() {
        wx.reLaunch({
          url: '../index/index',
        })
      }, 500)
    }).catch((e) => {
      wx.showToast({
        title: e,
      })
      wx.hideLoading()
    })
  }
})