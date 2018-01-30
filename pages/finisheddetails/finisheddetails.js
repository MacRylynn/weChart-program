// pages/finished/finished.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var orderContent =
      {
        productName: "全自动检测机",
        coding: "SXFS2322FS",
        orderNumber: "201801161237",
        status: "未处理",
        hospital: "协和医院",
        orderTime: "2018-01-16",
        expectTime: "2018-01-17",
        acceptTime: "2018-01-18",
        estimatedArrivalTime: "2018-01-19",
        arrivalTime: "2018-01-20",
        endTime: "2018-01-21",
        contactName: "Alice Misher",
        contactTel: "18571686931",
        engineerName: "Jay Chou",
        engineerTel: "15527788284",
        errorType: "漏液",
        errorMsg: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        uploadFiles: "XXXXX",
        evaluation: "好评"
      }


    this.setData({ orderDetail: orderContent });
  
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