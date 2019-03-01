import React from 'react';
import './index.scss'
export default class HeaderTop extends React.Component {
  render() {
    return (
      <div className="headerTop">
        <div className="city clearfix">
          <span className="cityName">上海</span>
          <i className="iconfont icon icon-zhankai"></i>
        </div>
        <div className="searchBtn" onClick={()=>{this.props.history.push({pathname: '/search'})}}>
          <div className="_wrap clearfix">
            <i className="iconfont icon-sousuo icon"></i>
            <span className="placeholder">请输入项目名称</span>
          </div>
        </div>
        <i className="iconfont changeBtn icon-ditu" onClick={()=>{this.props.history.push({pathname: '/load'})}}></i>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  componentDidMount() {
    console.log('location:', this.props.location)
    console.log('match:', this.props.match);
  }
}