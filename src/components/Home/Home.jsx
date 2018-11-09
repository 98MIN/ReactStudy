import React from 'react'
import routes from '../../router/routes'
import store from '../../Store'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { observer } from 'mobx-react'

const Home = observer(
  class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    regist = () => {
      store.isLogin = false
    }

    render() {
      return (
        <div>
          <Router>
            <div>
              <Link to="/Home">首页</Link>
              {store.isLogin ? (
                <Link to="/Login" onClick={this.regist}>
                  注销
                </Link>
              ) : (
                <Link to="/Login">登录</Link>
              )}
              <Link to="/Product">产品</Link>
              <Switch>
                {routes.map((item, key) => {
                  return <Route exact={true} key={key} path={item.path} component={item.component} />
                })}
              </Switch>
            </div>
          </Router>
        </div>
      )
    }
  }
)
export default Home
