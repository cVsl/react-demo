import React from 'react';
import './index.scss'
export default class TypeList extends React.Component {
  render() {
    return (
      <div className="selectTypes">
        <ul className="list">
          {this.state.typeList.map((item, index) => {
            return <li className="items" key={item.type}>
              <span className="name">{item.name}</span>
              <i className="iconfont icon-zhankai"></i>
            </li>
          })}
        </ul>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      typeList: [
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '面积', isSelect: false, type: 3}
      ]
    }
  }
  componentDidMount() {
    console.log('location:', this.props.location)
    console.log('match:', this.props.match);
  }
}