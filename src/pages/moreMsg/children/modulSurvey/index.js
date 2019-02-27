import React from 'react';
import './index.scss'
export default class ModulSurvey extends React.Component {
  render() {
    return (
      <div className="modulSurvey">
        <div className="baseMsg msgBox mt20">
          <h3 className="boxTitle">基本信息</h3>
          <div className="msg">
            <div className="showItem clearfix noneBb">
              <span className="name">项目名称：</span>
              <span className="value">上海浦东新区</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">所在区县：</span>
              <span className="value">上海浦东新区</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">项目地址：</span>
              <span className="value">上海浦东新区</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">业态类型：</span>
              <span className="value">上海浦东新区</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">物业公司：</span>
              <span className="value">上海浦东新区</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">项目负责人：</span>
              <a className="value phone clearfix" href="tel:12345678901">
                <span className="people">小王八</span>
                <span className="tel">12345678901</span>
                <i className="iconfont icon-dianhua pic"></i>
              </a>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">国内/ 国外：</span>
              <span className="value">国内</span>
            </div>
          </div>
        </div>
        <div className="arcMsg msgBox mt20">
          <h3 className="boxTitle">建筑信息</h3>
          <div className="msg">
            <div className="showItem clearfix noneBb">
              <span className="name">总建筑面积：</span>
              <span className="value">100㎡</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">地面建筑面积：</span>
              <span className="value">120㎡</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">分割面积：</span>
              <span className="value">100㎡</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">楼层面积：</span>
              <span className="value">100㎡</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">楼层数：</span>
              <span className="value">20层</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">楼层高度：</span>
              <span className="value">3m</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">开发商：</span>
              <span className="value">上海浦东新区</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">竣工日期：</span>
              <span className="value">2019-02-27</span>
            </div>
          </div>
        </div>
        <div className="goodMsg msgBox mt20">
          <h3 className="boxTitle">项目亮点</h3>
          <div className="msg">
            <p className="value">上海浦东新区</p>
          </div>
        </div>
        <div className="badMsg msgBox mt20">
          <h3 className="boxTitle">项目缺点</h3>
          <div className="msg">
            <p className="value">上海浦东新区</p>
          </div>
        </div>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
    }
  }
  componentDidMount() {
  }
}