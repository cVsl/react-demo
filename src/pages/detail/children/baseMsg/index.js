import React from 'react';
import './index.scss'
export default class BaseMsg extends React.Component {
  render() {
    return (
      <div className="baseMsg">
        <div className="headerData">
          <div className="title clearfix">
            <span className="name">上海前汤领航</span>
            <span className="type" v-show="detailData.TradeType">商业物业</span>
          </div>
          <div className="areaPrice">
            <span className="area">100㎡</span>
            <span className="price">199元/㎡</span>
          </div>
          <p className="location">地址：上海浦东新区</p>
        </div>
        <div className="baseMsg msgBox mt10">
          <h3 className="boxTitle">基本信息</h3>
          <div className="msg">
            <div className="showItem clearfix noneBb">
              <span className="name">楼层面积：</span>
              <span className="value">110㎡</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">地面建筑面积：</span>
              <span className="value">1200㎡</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">物业公司：</span>
              <span className="value">上海巴拉巴拉</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">项目开发商：</span>
              <span className="value">噼里啪啦</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">竣工日期：</span>
              <span className="value">2019-02-27</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">录入人：</span>
              <span className="value">步惊云</span>
            </div>
          </div>
        </div>
        <div className="followMsg msgBox mt10">
          <h3 className="boxTitle">最新跟进情况</h3>
          <div className="msg">
            <div className="showItem clearfix noneBb">
              <span className="name">跟进人：</span>
              <span className="value">路飞</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">跟进时间：</span>
              <span className="value">2019-02-27 16:13</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">说明：</span>
              <span className="value">自甘堕落</span>
            </div>
          </div>
        </div>
        <div className="moreBtn mt10" onClick={()=>this.toMoreMsg(this.props.pageId)}>查看更多</div>
      </div>
    )
  }
  toMoreMsg (id) {
    this.props.history.push({
      pathname: `/moreMsg/${id}`
    })
  }
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  componentDidMount() {
  }
}