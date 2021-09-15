const app = getApp()
const gD = app.globalData

var that

Page({

  data: {
    openId: "",
    user: {
      user_name: '',
      avatar: ''
    },
    records: [],
    searchInput: "",
    start_date: "",
    end_date: "",
    depature: "",
    arrival: "",
    list_height: 0
  },

  onLoad: function (options) {
    that = this
    let openId = wx.getStorageSync('openId')
    let userInfo = wx.getStorageSync('userInfo')
    if (!openId) {
      that.goToLogin()
    } else {
      that.setData({
        openId: openId,
        user: userInfo
      })
    }
  },

  onReady: function () {
    that.calListHeight()
  },

  calListHeight() {
    const query = wx.createSelectorQuery()
    query.select('.userInfo').boundingClientRect()
    query.select('.search-panel').boundingClientRect()
    query.exec(res => {
      let h = gD.winHeight - res[0].height - res[1].height - 45
      that.setData({
        list_height: h
      })
    })
  },

  onShow: function () {
    that.getTabBar().setData({
      tabBar_index: 0
    })
    that.search()
  },

  goToLogin() {
    wx.redirectTo({
      url: '/pages/login/index',
    })
  },

  switch (e) {
    wx.navigateTo({
      url: '../old_index/index'
    })
  },

  getCarRecord() {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'carFinancialFunctions',
      config: {
        env: getApp().globalData.env_id
      },
      data: {
        type: 'getCarRecordList',
        open_id: that.data.openId,
        searchInput: that.data.searchInput,
        start_date: that.data.start_date,
        end_date: that.data.end_date,
        depature: that.data.depature,
        arrival: that.data.arrival
      }
    }).then((res) => {
      console.log(res)
      res.result.data.forEach((item, index) => {
        item.total = Number(item.freight) + Number(item.entry_fee)
      })
      that.setData({
        records: res.result.data
      })
      wx.hideLoading()
    }).catch((e) => {
      console.log(e)
      wx.hideLoading()
    })
  },

  searchInputChange(e) {
    console.log(e)
    let val = e.detail.value
    that.setData({
      searchInput: val
    })
  },

  cancelSearchInput(e) {
    that.setData({
      searchInput: ""
    }, function() {
      that.search()
    })
  },

  bindStartChange(e) {
    that.setData({
      start_date: e.detail.value
    })
  },

  bindEndChange(e) {
    that.setData({
      end_date: e.detail.value
    })
  },

  depatureInput(e) {
    let val = e.detail.value
    that.setData({
      depature: val
    })
  },

  arrivalInput(e) {
    let val = e.detail.value
    that.setData({
      arrival: val
    })
  },

  reset() {
    that.setData({
      searchInput: "",
      start_date: "",
      end_date: "",
      depature: "",
      arrival: "",
    })
  },

  search(e) {
    that.setData({
      records: []
    }, function() {
      that.getCarRecord()
    })
  },

  openDocumnent(e) {
    let fileID = e.currentTarget.dataset.file.fileID
    console.log(e)
    wx.cloud.downloadFile({
      fileID: fileID,
      success: (res) => {
        wx.openDocument({
          filePath: res.tempFilePath,
        })
      }
    })
  }
})