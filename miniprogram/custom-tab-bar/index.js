// components/custom-tab-bar/index.js
var that

Component({
  properties: {

  },

  data: {
    tabBar_index: 0,
    home_image: '../images/ic-home.png',
    home_active_image: '../images/ic-home-active.png',
    financial_image: '../images/ic-financial.png',
    financial_active_image: '../images/ic-financial-active.png',
    urls: [
      '/pages/index/index',
      '/pages/financial/index',
    ],
    underTexts: [ "首页", "收入"],
    isShowTabBar: true
  },

  attached() {
    that = this
  },

  methods: {
    switchTab(e) {
      console.log(e)
      let index = e.currentTarget.dataset.index
      wx.switchTab({
        url: that.data.urls[index],
      })
    },

    navToNew(e) {
      wx.navigateTo({
        url: '/pages/car_record/index',
      })
    }
  }
})