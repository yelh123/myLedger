var that
Page({

  data: {
    onInitYearChart: () => {},
    onInitMonthChart: () => {},
    isShowYearChart: false,
    isShowMonthChart: false,
    year: new Date().getFullYear(),
    month: '0' + (new Date().getMonth() + 1)
  },
  onLoad: function (options) {
    that = this
    that.getChartData()
  },

  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    that.getTabBar().setData({
      tabBar_index: 1
    })
  },

  getChartData() {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'carFinancialFunctions',
      config: {
        env: getApp().globalData.env_id
      },
      data: {
        type: 'getCarChartData',
        open_id: that.data.openId,
        year: that.data.year,
        month: that.data.month
      }
    }).then(res => {
      console.log(res)
      if(!that.data.isShowYearChart && !that.data.isShowMonthChart) {
        that.initChart(res.result)
      }else {
        that.changeData(res.result)
      }
      wx.hideLoading()
    }).catch(e => {
      console.log(e)
      wx.hideLoading()
    })
  },

  initChart(result) {
    that.setData({
      isShowYearChart: result.year_data.length > 0,
      isShowMonthChart: result.month_data.length > 0
    })
    that.initYearData(result.year_data)
    that.initMonthData(result.month_data)
  },

  initYearData(data) {
    let initChart = function(F2, config) {
      const chart = new F2.Chart(config);
      chart.source(data, {
        money: {
          tickCount: 5,
          min: 0
        },
        date: {
          type: 'timeCat',
          range: [ 0, 1 ],
          tickCount: 3
        }
      });
      chart.axis('date', {
        label: function label(text, index, total) {
          const textCfg = {};
          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          return textCfg;
        }
      });
      chart.line().position('date*money');
      chart.render();

      return chart
    }
    that.setData({
      onInitYearChart: initChart
    })
  },

  initMonthData(data) {
    let initChart = function(F2, config) {
      const chart = new F2.Chart(config);
      chart.source(data, {
        money: {
          tickCount: 5,
          min: 0
        },
        date: {
          type: 'timeCat',
          range: [ 0, 1 ],
          tickCount: 3
        }
      });
      chart.axis('date', {
        label: function label(text, index, total) {
          const textCfg = {};
          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          return textCfg;
        }
      });
      chart.line().position('date*money');
      chart.render();

      return chart
    }
    that.setData({
      onInitMonthChart: initChart
    })
  },

  changeData(result) {
    let yearChart = that.selectComponent('#year')
    let monthChart = that.selectComponent('#month')
    yearChart.chart.changeData(result.year_data)
    monthChart.chart.changeData(result.month_data)
    // console.log(yearChart, monthChart)
  },

  onYearChange(e) {
    let val = e.detail.value
    that.setData({
      year: val
    }, function() {
      that.getChartData()
    })
    console.log(val)
  },

  onMonthChange(e) {
    let val = e.detail.value
    if(val.length > 0) {
      val = val.substring(val.length - 2)
    }
    that.setData({
      month: val
    }, function() {
      that.getChartData()
    })
  },

  cancelMonth() {
    that.setData({
      month: ''
    }, function() {
      that.getChartData()
    })
  }
})