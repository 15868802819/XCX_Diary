// pages/adddiary/adddiary.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ColorList: app.globalData.ColorList,
    lastX:0,
    lastY:0,
    text: "没有滑动", 
    bgImageList: [
      { url: 'https://img-blog.csdnimg.cn/20190309133726749.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726453.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726837.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726484.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726679.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726520.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726610.jpeg' }
    ]
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  touchMove: function (event) {
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY

    let text = ""
    if ((currentX - this.data.lastX) < 0) {
      this.setData({
        modalName: "DrawerModalR"
      })
    } else {
      this.setData({
        modalName: "DrawerModalL"
      })
    }

    this.data.lastX = currentX
    this.data.lastY = currentY

  },

  touchStart: function (event) {

    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY
  }

})




  

