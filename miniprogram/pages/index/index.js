const app = getApp()
const gD = app.globalData

Page({

  data: {
    openId: gD.openId || ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  switch(e) {
    wx.navigateTo({
      url: '../old_index/index'
    })
  }
})