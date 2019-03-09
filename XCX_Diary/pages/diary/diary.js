const app = getApp();

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    lastX: 0,
    lastY: 0,
    text: "没有滑动",
    bgImageList: [
      {url:'https://img-blog.csdnimg.cn/20190309133726749.jpeg'},
      {url:'https://img-blog.csdnimg.cn/20190309133726453.jpeg'},
      {url:'https://img-blog.csdnimg.cn/20190309133726837.jpeg'},
      {url:'https://img-blog.csdnimg.cn/20190309133726484.jpeg'},
      {url:'https://img-blog.csdnimg.cn/20190309133726679.jpeg'},
      {url:'https://img-blog.csdnimg.cn/20190309133726520.jpeg'},
      {url:'https://img-blog.csdnimg.cn/20190309133726610.jpeg'}
    ],
    DiaryLabel:[
      {
        label:"游戏",
        color:'green',
      },

      {
        label: "学校",
        color: 'cyan',
      },

      {
        label: "生活",
        color: 'mauve',
      },
      {
        label: "美食",
        color: 'brown',
      },

      {
        label: "医药",
        color: 'pink',
      },
      {
        label: "旅游",
        color: 'grey',
      },

      {
        label: "亲情",
        color: 'orange',
      },

    ],
    bgImgUrl:null
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  SetShadow(e) {
    this.setData({
      shadow: e.detail.value
    })
  },
  SetBorderSize(e) {
    this.setData({
      bordersize: e.detail.value
    })
  },

  touchMove: function(event) {
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

  touchStart: function(event) {

    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY
  },

  bgImageTap:function(e)
  {
      this.setData({
        bgImgUrl: e.currentTarget.dataset.name
      })
    console.log(e.currentTarget.dataset.name)
  }

});