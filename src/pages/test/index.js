import React from 'react';
import NavTitle from '../../components/navTitle/index.js';
import { connect } from 'react-redux'
class Test extends React.Component {
  render() {
    const { value, num } = this.props
    return (
      <div className="page page_bg">
        <NavTitle title='redux测试' goBack={this.props.history.goBack}/>
        <div className="page_bd">
          <div style={{height:'100vh',background:'#fff'}}>
            <span>userName:{num}---passWord:{value}</span>
            <br />
            <button onClick={this.onIncreaseClick.bind(this)}>btn1</button>
            <br />
            <button onClick={this.onIncreaseClick2.bind(this)}>btn2</button>
          </div>
        </div>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
    };
  }
  componentDidMount() {
    console.log('location:', this.props.location)
    console.log('match:', this.props.match);
  }
  onIncreaseClick () {
    console.log('in.....')
    this.props.userChange('123456')
  }
  onIncreaseClick2 () {
    console.log('in.....')
    this.props.passChange('fadsfsfsd')
  }
}

// Detail.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

// Map Redux state to component props
function mapStateToProps(state) {
  console.log(state)
  return {
    num: state.passWord,
    value: state.userName
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    userChange: (userName)=>dispatch({ type: 'LOGINUSER', userName:userName }),
    passChange:(passWord)=>dispatch({ type: 'LOGINPASS', passWord:passWord })
    // onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)
