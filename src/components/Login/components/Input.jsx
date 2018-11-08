import React, { Component } from 'react'
import './styles/index.css'
import './assets/iconfont.css'
import store from '../../../Store'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isIcon: this.props.Icon,
      classNames: this.props.classNames || '',
      vList: [],
    }
  }

  static defaultProps = {
    style: {
      width: '100%',
      height: '35px',
    },
    type: 'text',
  }

  // 输入框获取焦点
  focus = () => {
    const { focus } = this.props

    this.setState({
      isIcon: false,
      classNames: 'focus',
    })

    if (focus) {
      focus()
    }
  }
  // 输入框失去焦点
  blur = () => {
    const { blur } = this.props

    this.setState({
      isIcon: true,
      classNames: '',
    })

    if (blur) {
      blur()
    }
  }
  // 刷新验证码
  RandVerif = () => {
    console.log(3333)
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
    const { isVerif } = this.props

    if (isVerif) {
      let p = new Promise((resolve) => {
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
        if (!store.isLogin) {
          this.setState({
            vList: list,
          })
        }
        if (!store.isLogin) {
          this.RandVerif()
        }
      })
    }
  }

  render() {
    const { blur, focus, Icon, isVerif, type, ...rest } = this.props
    const { isIcon, classNames, verif } = this.state
    return (
      <div className="Icon">
        <input
          {...rest}
          type={type}
          // placeholder={placeholder}
          className={Icon ? 'Input ' + classNames : 'Input noIcon ' + classNames}
          onFocus={this.focus}
          onBlur={this.blur}
          // style={style}
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
