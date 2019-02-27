import React from 'react';
import './index.scss'
export default class ModulResult extends React.Component {
  render() {
    return (
      <div className="modulResult">
        <div className="baseMsg msgBox mt20">
          <h3 className="boxTitle">交易信息</h3>
          <div className="msg">
            <div className="showItem clearfix noneBb">
              <span className="name">平均租金：</span>
              <span className="value">300元/㎡</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">周边租金：</span>
              <span className="value">500元/㎡</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">购置价格：</span>
              <span className="value">600元</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">成交面价：</span>
              <span className="value">500元</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">出租率：</span>
              <span className="value">20%</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">得房率：</span>
              <span className="value">8%</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">收益率：</span>
              <span className="value">60%</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">车位费：</span>
              <span className="value">300元</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">租赁期限：</span>
              <span className="value">70年</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">资产价格：</span>
              <span className="value">888元</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">业主报价：</span>
              <span className="value">666元</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">中介联系方式：</span>
              <a className="value phone clearfix" href="tel:12345678901">
                <span className="tel">12345678901</span>
                <i className="iconfont icon-dianhua pic"></i>
              </a>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">付款方式：</span>
              <span className="value">线下</span>
            </div>
            <div className="showItem clearfix noneBb">
              <span className="name">涉外代表注册：</span>
              <span className="value">否</span>
            </div>
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