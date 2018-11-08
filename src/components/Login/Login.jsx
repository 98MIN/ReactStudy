import React from 'react'
import './styles/index.css'
import Input from './components/Input'
import { Link } from 'react-router-dom'
import store from '../../Store'
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

  // 输入框失去焦点
  blur = () => {
    console.log('blur获取父级方法成功')
  }
  focus = () => {
    console.log('focus获取父级方法成功')
  }

  screenChange = () => {
    window.addEventListener('resize', this.resize)
  }

  handleBtn = (e) => {
    e.preventDefault()
    store.isLogin = true

    if (store.isLogin) {
      this.props.history.push('/Product')
    }
  }
  componentWillMount() {
    // 页面加载后开始监控缩放
    ;(async () => {
      await this.screenChange()
      if (store.isLogin) {
        this.props.history.push('/Product')
      }
    })()
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
            <Link to="/Home" style={{ color: '#fff', textDecoration: 'none' }}>
              {' '}
              {/*  <--  */}
              <span style={{ fontSize: '12px', color: '#aaa' }}>产品导航</span>
            </Link>
          </div>
          <div className="main">
            <Input
              style={{ width: '270px', height: '35px' }}
              Icon={'icon-wode'}
              placeholder={'用户'}
              blur={this.blur}
              focus={this.focus}
            />
            <Input
              style={{ width: '270px', height: '35px' }}
              Icon={'icon-mima'}
              placeholder={'密码'}
              type={'password'}
              blur={this.blur}
              focus={this.focus}
            />
            <Input
              style={{ width: '200px', height: '35px' }}
              Icon={'icon-shezhi'}
              placeholder={'验证码'}
              isVerif={true}
              blur={this.blur}
              focus={this.focus}
            />
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
