const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  onLoad: function () { },

  addDiary: function(){
    wx.navigateTo({
      url: '../adddiary/adddiary',
      success:function(res){},
      fail:function(res){},
      complete:function(res){},
    })
  }
});
