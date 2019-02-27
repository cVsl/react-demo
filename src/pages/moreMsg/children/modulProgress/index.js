import React from 'react';
import './index.scss'
export default class ModulProgress extends React.Component {
  render() {
    return (
      <div className="modulProgress">
        {this.state.progressList.map((item, index) => {
          return <div className="progressBox mt20" key={index}>
            <div className="title">
              <span className="time">2019-02-27</span>
              <span className="name">小王八</span>
            </div>
            <div className="msg">
              <p className="value">窗前明月光，疑是地上霜。举头望明月，低头思故乡。</p>
            </div>
          </div>
        })}
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      progressList: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
  componentDidMount() {
  }
}