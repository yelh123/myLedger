
var that
var app = getApp()
var gD = app.globalData

Page({

  data: {
    scrollHeight: 0,
    delivery_code: '',
    date: '',
    depature: '',
    arrival: '',
    contact: '',
    phone: '',
    freight: '',
    entry_fee: '',
    files: [],
    id: "",
    status: 0,
    statusList: [{
      name: '未对账',
      status: 0
    }, {
      name: '已对账',
      status: 1
    }]
  },

  onLoad: function (options) {
    that = this
    if(options.record) {
      let record = JSON.parse(options.record)
      wx.setNavigationBarTitle({
        title: '修改驳货单',
      })
      console.log(record)
      that.setData({
        id: record._id,
        delivery_code: record.delivery_code,
        date: record.date,
        contact: record.contact,
        depature: record.depature,
        arrival: record.arrival,
        entry_fee: record.entry_fee,
        freight: record.freight,
        phone: record.phone,
        files: record.files,
        status: record.status || 0, //status 1 是已经对账成功 | 0 是未对账的
        remark: record.remark || ''
      })
    }
  },

  onReady: function () {

  },
  onReady: function () {
    that.calScrollHeight()
  },
  calScrollHeight() {
    const query = wx.createSelectorQuery()
    query.select('.submit').boundingClientRect()
    query.exec(res => {
      console.log(res)
      let h = gD.winHeight * gD.rpx_factor - 176 - 32 - 30
      that.setData({
        scrollHeight: h
      })
    })
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
      if(that.data.id) {
        that.updateRecord(record)
      }else {
        that.addRecord(record)
      }
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
  },

  updateRecord(record) {
    wx.showLoading({
      title: '',
    })
    wx.cloud.callFunction({
      name: 'carFinancialFunctions',
      config: {
        env: getApp().globalData.env_id
      },
      data: {
        type: 'updateCarRecord',
        record: record,
        id: that.data.id,
        open_id: wx.getStorageSync('openId')
      }
    }).then((res) => {
      console.log(res)
      wx.hideLoading()
      wx.showToast({
        title: '修改成功',
      })
      setTimeout(function() {
        wx.navigateBack()
      }, 2000)
    }).catch((e) => {
      console.log(e)
      wx.showToast({
        title: '修改失败',
        icon: 'none'
      })
      wx.hideLoading()
    })
  },

  statusChange(e) {
    console.log(e)
    that.setData({
      status: e.detail.value
    })
  }
})