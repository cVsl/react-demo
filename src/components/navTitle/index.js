import React from 'react'
import './index.scss'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  render() {
    return (
      <div className="headerTitle">
        <div className="_content">
          <p className="btn clearfix" onClick={() => this.props.goBack()}>
            <i className="iconfont icon-fanhui11 icon"></i>
            <span className="name">返回</span>
          </p>
          <p className="title">
            <span>{this.props.title}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Header
