import React from 'react';
import './index.scss';
import NavTitle from '../../components/navTitle/index.js';
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile';
import BaseMsg from './children/baseMsg'
class Detail extends React.Component {
  render() {
    return (
      <div className="page page_bg">
        <NavTitle title='项目详情' goBack={this.props.history.goBack}/>
        <div className="page_bd">
          <Carousel
            autoplay={true}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: '3.12rem' }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
          <BaseMsg history={this.props.history} pageId={this.props.match.params.id}></BaseMsg>
        </div>
        <div className="connet">
          <span className="name"></span>
          <a className="phone clearfix" href="tel:12345678901">
            <span className="tel">12345678901</span>
            <i className="iconfont icon-dianhua icon"></i>
          </a>
        </div>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      data: ['1', '2', '3']
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100)
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
)(Detail)
