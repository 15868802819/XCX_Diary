const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    cardCur: 0,
    tower: [{
      id: 0,
      url: 'images/swiper/01.jpg'
    }, {
      id: 1,
      url: 'images/swiper/02.jpg'
    }, {
      id: 2,
      url: 'images/swiper/03.jpg'
    }],
    imgUrls: [
      'https://img-blog.csdnimg.cn/20190227211129154.jpg',
      'https://img-blog.csdnimg.cn/2019022721112971.jpg',
      'https://img-blog.csdnimg.cn/201902272111298.jpg'
    ],
    bgImageList: [
      { url: 'https://img-blog.csdnimg.cn/20190309133726749.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726453.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726837.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726484.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726679.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726520.jpeg' },
      { url: 'https://img-blog.csdnimg.cn/20190309133726610.jpeg' }
    ],
  },
  onLoad() {
    this.towerSwiper('tower');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      towerList: list
    })
  },

  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },

  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },

  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.towerList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        towerList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        towerList: list
      })
    }
  },
});