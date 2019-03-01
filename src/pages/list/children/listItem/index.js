import React from 'react';
import './index.scss'
import ReactDOM from 'react-dom'
import { PullToRefresh } from 'antd-mobile';
const dataArr = [];
function genData() {
  for (let i = 0; i < 10; i++) {
    dataArr.push(i);
  }
  return dataArr;
}
export default class ListItem extends React.Component {
  render() {
    return (
      <div className="items-wrap">
        <div className="list">
          <PullToRefresh
            damping={60}
            ref={el => this.ptr = el}
            style={{
              height: 'calc(100vh - 2.74rem)',
              overflow: 'auto',
            }}
            indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
            direction='up'
            refreshing={this.state.refreshing}
            onRefresh={() => {
              genData()
              this.setState({ refreshing: true });
              setTimeout(() => {
                this.setState({ refreshing: false });
              }, 1000);
            }}
          >
            {this.state.data.map((item,index) => (
              <div className="items clearfix" key={index} onClick={() =>this.toDetail(index)}>
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
            </div>
            ))}
          </PullToRefresh>
        </div>
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
      refreshing: false,
      down: false,
      height: document.documentElement.clientHeight,
      data: [],
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
        {name: '区域', isSelect: false, type: 0}
      ]
    }
  }
  componentDidMount() {
    console.log('props:', this.state.type)
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);
  }
}