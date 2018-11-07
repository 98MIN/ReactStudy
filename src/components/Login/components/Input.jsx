import React, { Component } from 'react'
import './styles/index.css'
import './assets/iconfont.css'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isIcon: this.props.Icon,
      classNames: this.props.classNames || '',
      vList: []
    }
  }
// 输入框获取焦点
  focus = () => {
    this.setState({
      isIcon: false,
      classNames: 'focus',
    })
  }
  // 输入框失去焦点
  blur = () => {
    this.setState({
      isIcon: true,
      classNames: '',
    })
  }
// 刷新验证码
  RandVerif = () => {
    var str = ''
    const { vList } = this.state
    for (var i = 0; i < 4; i++) {
      var j = Math.floor(Math.random() * vList.length)
      str += vList[j]
    }
    this.setState({
      verif: str,
    })
  }
// 页面加载时生成随机验证码
  componentDidMount() {
    let p = new Promise((resolve, reject) => {
      var list = []
      for (var i = 0; i < 10; i++) {
        list.push(i)
      }
      for (var i = 65; i < 91; i++) {
        list.push(String.fromCharCode(i))
      }
      for (var i = 97; i < 123; i++) {
        list.push(String.fromCharCode(i))
      }
      resolve(list)
    })
    p.then((list) => {
      this.setState({
        vList: list,
      })
      const { isVerif } = this.props
      if (isVerif) {
        this.RandVerif()
      }
    })
  }
  render() {
    const { placeholder, type, width, height, Icon, isVerif } = this.props
    const { isIcon, classNames, verif } = this.state
    return (
      <div className="Icon">
        <input
          type={type}
          placeholder={placeholder}
          style={{ width, height }}
          className={'Input ' + classNames}
          onFocus={this.focus}
          onBlur={this.blur}
          required
        />
        {isIcon && (
          <span className="Iconspan">
            <i className={'iconfont ' + Icon} />
          </span>
        )}
        {isVerif && (
          <span className="verif" onClick={this.RandVerif}>
            {verif}
          </span>
        )}
      </div>
    )
  }
}

export default Input
