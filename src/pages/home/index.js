import React from 'react';
import './index.scss';
import Navtitle from '../../components/navTitle/index.js';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home page page_bg">
        <Navtitle title="投资物业" goBack={this.props.history.goBack}/>
        <div className="banner">
          <img className="pic" src={require('../../assets/img/banner.jpg')} alt='' />
        </div>
        <div className="content page_bd">
          <div className="destine items clearfix" onClick={() => this.routerTo(15)}>
            <i className="iconfont pics icon-fangyuan1"></i>
            <span>已投项目</span>
          </div>
          <div className="myDestine items clearfix" onClick={() => this.routerTo(10)}>
            <i className="iconfont pics icon-weilai"></i>
            <span>未来可投</span>
          </div>
          <div className="myMeeting items clearfix" onClick={() => this.routerTo(20)}>
            <i className="iconfont pics icon-prohibit"></i>
            <span>暂不考虑</span>
          </div>
        </div>
      </div>
    )
  }
  routerTo (type) {
    if (type === 20) {
      this.props.history.push({
        pathname: `/test`,
        query: {
          type: type
        }
      })
    } else {
      this.props.history.push({
        pathname: `/list`,
        query: {
          type: type
        }
      })
    }
  }
}
