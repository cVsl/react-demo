import React from 'react';
import './index.scss'
export default class ModulResult extends React.Component {
  render() {
    return (
      <div className="modulMatch">
        <div className="baseMsg msgBox mt20">
          <h3 className="boxTitle">基本配套</h3>
          <div className="msg">
            <div className="showItem clearfix noneBb">
              <span className="name">电梯数量：</span>
              <span className="value">4台</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">电梯品牌：</span>
              <span className="value">海尔</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">车位数量：</span>
              <span className="value">111</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">空调系统：</span>
              <span className="value">bbb</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">空调开放：</span>
              <span className="value">8:00-18:00</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">电信系统：</span>
              <span className="value">电信</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">地板：</span>
              <span className="value">摸头</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">其它材料：</span>
              <span className="value">塑料</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">吊顶：</span>
              <span className="value">灯饰</span>
            </div>
          </div>
        </div>
        <div className="arcMsg msgBox mt20">
          <h3 className="boxTitle">交通配套</h3>
          <div className="tip">暂无</div>
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