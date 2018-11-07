import React from 'react'
import './styles/index.css'
import Input from './components/Input'
import { Link } from 'react-router-dom'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMiddle: true,
      classNames: '',
    }
  }

  focus = () => {
    return false
  }
  resize = () => {
    if ((document.documentElement.clientWidth || document.body.clientWidth) < 540) {
      this.setState({
        isMiddle: false,
        classNames: 'smallWarp',
      })
    } else {
      this.setState({
        isMiddle: true,
        classNames: '',
      })
    }
  }
  screenChange = () => {
    window.addEventListener('resize', this.resize)
  }

  handleBtn = (e) => {
    e.preventDefault()
    console.log(123)
  }
  componentDidMount() {
    this.screenChange()
  }

  render() {
    const { isMiddle, classNames } = this.state
    return (
      <div className={'Warp ' + classNames}>
        {isMiddle && (
          <div className="Left">
            <h3>
              <a href="#">
                <img src={require('./assets/brand.png')} height="42px" />
              </a>
            </h3>
            <div className="Info">
              <h3>QBackup</h3>
              <p style={{ fontSize: '12px' }}>数据库容灾备份云平台</p>
            </div>
            <p className="Footer">版本: 5.0.0</p>
          </div>
        )}
        <div className="Right">
          <div className="header">
            <span style={{ fontSize: '18px', color: '#ccc' }}>登录</span>
            <Link to='/Home' style={{color:'#fff',textDecoration:'none'}}> <span style={{ fontSize: '12px', color: '#aaa' }}>产品导航</span></Link>
          </div>
          <div className="main">
            <Input width={'270px'} height={'35px'} Icon={'icon-wode'} placeholder={'用户'} />
            <Input width={'270px'} height={'35px'} Icon={'icon-mima'} placeholder={'密码'} />
            <Input width={'200px'} height={'35px'} Icon={'icon-shezhi'} placeholder={'验证码'} isVerif={true} />
            <a href="#" className="btn" onClick={this.handleBtn}>
              登录
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
