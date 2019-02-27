import React from 'react';
import NavTitle from '../../components/navTitle/index.js';
import HeaderTop from './children/headerTop'
import TypeList from './children/typeList'
import ListItem from './children/listItem'
export default class Home extends React.Component {
  render() {
    return (
      <div className="page page_bg">
        <NavTitle title={this.state.title} goBack={this.props.history.goBack}/>
        <HeaderTop history={this.props.history}></HeaderTop>
        <TypeList></TypeList>
        <div className="page_bd">
          <ListItem listType={this.state.type} history={this.props.history}></ListItem>
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
    this.setTitle()
  }
  componentDidMount() {
    console.log('location:', this.props.location)
    console.log('match:', this.props.match);
    // this.setTitle()
  }
  setTitle () {
    switch ((this.props.location.query && this.props.location.query.type) || 10) {
      case 10:
        this.setState({title: '未来可投', type: 10})
        break
      case 15:
        this.setState({title: '已投项目', type: 15})
        break
      case 20:
        this.setState({title: '暂不考虑', type: 20})
        break
      default:
        break
    }
  }
}