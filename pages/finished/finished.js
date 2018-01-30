// pages/finished/finished.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  clickDetail: function () {
    wx.navigateTo({
      url: '../finisheddetails/finisheddetails',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var orderContent = [{
      orderNumber: '201801161234',
      orderTime: '2018-01-25',
      hospital: '成都市六医院',
    },
    {
      orderNumber: '201801161235',
      orderTime: '2018-01-26',
      hospital: '成都市医院',
    },
    {
      orderNumber: '201801161236',
      orderTime: '2018-01-27',
      hospital: '成都市六医院',
    },
    {
      orderNumber: '201801161237',
      orderTime: '2018-01-28',
      hospital: '成都市六医院',
    },
    ];
    this.setData({ order: orderContent });
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})