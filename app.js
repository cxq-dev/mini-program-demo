// app.js
App({

  globalDate: {
    userNickName:"",
    userPic:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    try {
      var value = wx.getStorageSync('userNickName')
      if (value) {
        this.globalDate.userNickName=value;
        }
        } catch (e) {
        
       }
    try {
      var value = wx.getStorageSync('userPic')
      if (value) {
        this.globalDate.userPic=value;
      }
      } catch (e) {
       
      }
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

