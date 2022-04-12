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
    status: "",
    statusList: [{
      name: '未对账',
      status: '0'
    }, {
      name: '已对账',
      status: '1'
    }],
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
        arrival: that.data.arrival,
        status: that.data.status
      }
    }).then((res) => {
      console.log(res)
      if(Array.isArray(res.result.data)) {
        res.result.data.forEach((item, index) => {
          item.total = Number(item.freight) + Number(item.entry_fee)
        })
        that.setData({
          records: res.result.data
        })
      }
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

  statusChange(e) {
    console.log(e)
    that.setData({
      status: e.detail.value
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
  },

  output(e) {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'carFinancialFunctions',
      config: {
        env: getApp().globalData.env_id
      },
      data: {
        type: 'outputExcel',
        data_arr: that.data.records
      }
    }).then(res => {
      console.log(res)
      wx.cloud.downloadFile({
        fileID: res.result.fileID,
        success: res => {
          console.log(res)
          wx.openDocument({
            filePath: res.tempFilePath,
          })
        }
      })
      wx.hideLoading()
    }).catch(err => {
      console.log(err)
      wx.hideLoading()
    })
  },

  delete(e) {
    let id = e.currentTarget.dataset.id
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'carFinancialFunctions',
      config: {
        env: getApp().globalData.env_id
      },
      data: {
        type: 'deleteCarRecord',
        id: id
      }
    }).then(res => {
      wx.hideLoading()
      wx.showToast({
        title: '删除成功'
      })
      that.setData({
        records: []
      }, function() {
        that.getCarRecord()
      })
    }).catch(err => {
      wx.showToast({
        title: '删除失败'
      })
      console.log(err)
      wx.hideLoading()
    })
  },

  modify(e) {
    let record = e.currentTarget.dataset.record
    wx.navigateTo({
      url: '../car_record/index?record=' + JSON.stringify(record),
    })
  },

  checkStatus(e) {
    wx.cloud.callFunction({
      name: 'carFinancialFunctions',
      config: {
        env: getApp().globalData.env_id
      },
      data: {
        type: 'updateAllRecordStatus'
      }
    }).then(res => {
      console.log(res)
      wx.showToast({
        title: `已更新${res.result.stats.updated}`
      })
      that.search()
    }).catch(err => {
      console.log(err)
    })
  }
})