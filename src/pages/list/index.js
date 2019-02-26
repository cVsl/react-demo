import React from 'react';
import NavTitle from '../../components/navTitle/index.js';
import HeaderTop from './children/headerTop'
export default class Home extends React.Component {
  render() {
    return (
      <div className="page page_bg">
        <NavTitle title={this.state.title} goBack={this.props.history.goBack}/>
        <HeaderTop></HeaderTop>
        <div className="page_bd">
          <div style={{height:'100vh',background:'#fff'}}>111</div>
        </div>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      title: ''
    };
  }
  componentDidMount() {
    console.log('location:', this.props.location)
    console.log('match:', this.props.match);
    this.setTitle()
  }
  setTitle () {
    switch ((this.props.location.query && this.props.location.query.type) || 10) {
      case 10:
        this.setState({title: '未来可投'})
        break
      case 15:
        this.setState({title: '已投项目'})
        break
      case 20:
        this.setState({title: '暂不考虑'})
        break
      default:
        break
    }
  }
}