import React from 'react'
import store from '../../Store'
class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { match } = this.props
    if (match.path == '/Product' && store.isLogin) {
      console.log('欢迎来到产品界面')
    } else {
      this.props.history.push('/Login')
    }
  }

  render() {
    return <div>Product Page</div>
  }
}

export default Product
