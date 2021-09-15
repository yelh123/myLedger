
var that
Page({

  data: {
    delivery_code: '',
    date: '',
    depature: '',
    arrival: '',
    contact: '',
    phone: '',
    freight: '',
    entry_fee: '',
    files: []
  },

  onLoad: function (options) {
    that = this
  },

  onReady: function () {

  },
  onShow: function () {

  },
  inputChange(e) {
    let type = e.currentTarget.dataset.type
    that.setData({
      [type]: e.detail.value
    })
  },

  dateChange(e) {
    console.log(e)
    that.setData({
      date: e.detail.value
    })
  },

  formSubmit(e) {
    console.log(e)
    let record = e.detail.value
    if(!record.delivery_code) {
      wx.showToast({
        title: '驳货单号必填',
      })
      return
    } else if(!record.date) {
      wx.showToast({
        title: '日期必填',
      })
      return
    } else if(!record.contact) {
      wx.showToast({
        title: '联系人必填',
      })
      return
    } else if(!record.depature) {
      wx.showToast({
        title: '出发地必填',
      })
      return
    } else if(!record.arrival) {
      wx.showToast({
        title: '目的地必填',
      })
      return
    } else if(!record.freight && !record.entry_fee) {
      wx.showToast({
        title: '运费和进仓费必有一个',
      })
      return
    } else {
      that.addRecord(record)
    }
  },

  addRecord(record) {
    wx.showLoading({
      title: '',
    })
    wx.cloud.callFunction({
      name: 'carFinancialFunctions',
      config: {
        env: getApp().globalData.env_id
      },
      data: {
        type: 'addCarRecord',
        record: record,
        open_id: wx.getStorageSync('openId')
      }
    }).then((res) => {
      console.log(res)
      wx.hideLoading()
      wx.showToast({
        title: '添加成功',
      })
      setTimeout(function() {
        wx.navigateBack()
      }, 2000)
    }).catch((e) => {
      console.log(e)
      wx.hideLoading()
    })
  }
})