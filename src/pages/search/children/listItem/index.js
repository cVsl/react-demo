import React from 'react';
import './index.scss'
export default class ListItem extends React.Component {
  render() {
    return (
      <div className="items-wrap">
        <ul className="list">
          {this.state.typeList.map((item, index) => {
            return <li className="items clearfix" key={index} onClick={() =>this.toDetail(index)}>
              <div className="status statusColor0">{this.props.listType===10?'可投':'已投'}</div>
              <img className="pic" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3746843204,2415740284&fm=27&gp=0.jpg" alt=""/>
              <div className="desc">
                <div className="title _lines">
                  <span>银河世纪花园</span>
                </div>
                <div className="name _lines">
                  <span>100㎡</span>
                  <span>888</span>
                  <span>巴拉巴拉</span>
                </div>
                <div className="price _lines">300元㎡/天</div>
                <div className="time _lines">2019-02-26 17:45</div>
              </div>
            </li>
          })}
        </ul>
      </div>
    )
  }
  toDetail (id) {
    console.log()
    this.props.history.push({
      pathname: `/detail/${id}`
    })
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      type: this.props.listType,
      typeList: [
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '区域', isSelect: false, type: 0},
        {name: '业态', isSelect: false, type: 1},
        {name: '租金', isSelect: false, type: 2},
        {name: '面积', isSelect: false, type: 3}
      ]
    }
  }
  componentDidMount() {
    console.log('props:', this.state.type)
  }
}