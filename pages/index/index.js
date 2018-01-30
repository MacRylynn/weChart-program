//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      });


    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  formSubmit: function (event) {
    var that = this
    if (event.detail.value.password == '123') {
      wx.switchTab({
        url: '/pages/aftersales/aftersales',
      })

    } else {
      wx.showModal({
        title: '密码错误',
        content: '请重新输入密码',
      })
    }
  },


  login: function () {
    wx.login({
      success: function (res) {
        var code = res.code;
        if (code) {
          console.log('获取用户登录凭证：' + code);
        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            grant_type: 'authorization_code',
            appid: 'wx72624f63b0523850',
            secret: 'e18081aa9fc5fb60fb78d138ed1182ad',
            js_code: code
          },
          success: function (res) {
            console.log(res.data)
          }
        })
      }
    })

  }
})
