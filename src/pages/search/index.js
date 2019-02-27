import React from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile'
import NavTitle from '../../components/navTitle/index.js';
import ListItem from './children/listItem'
export default class Home extends React.Component {
  render() {
    return (
      <div className="page page_bg">
        <NavTitle title="搜索" goBack={this.props.history.goBack}/>
        <SearchBar placeholder="请输入项目名称" ref={ref => this.autoFocusInst = ref} />
        <div className="page_bd">
          <ListItem listType="10" history={this.props.history}></ListItem>
        </div>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      title: '',
      type: 0
    };
  }
  componentWillMount () {
  }
  componentDidMount() {
    this.autoFocusInst.focus();
    console.log('location:', this.props.location)
    console.log('match:', this.props.match);
    // this.setTitle()
  }
}