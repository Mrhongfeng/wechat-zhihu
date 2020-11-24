const rq = require('../../utils/request.js');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.getArticleList();
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

  },

  /**
   * 获取列表信息
   */
  getArticleList: function () {
    let url = app.globalData.domain + '/article/searchArticle';
    let data = null;
    rq.requestBase(url, data, 'GET', this.getResList);
  },

  getResList: function (res) {
    this.data.articleList = res.data
    this.setData({
      articleList: res.data
    })
    console.log(this.data.articleList)
  },

  /**
   * 跳转详情页
   */
  openDetail: function (res) {
    console.log(res)
    wx.navigateTo({
      url: '../detail/detail?id=' + res.currentTarget.id,
    })
  }
})