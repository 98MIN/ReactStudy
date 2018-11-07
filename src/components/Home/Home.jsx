import React from 'react'
import routes from '../../router/routes'
import { Lifecycle } from 'react-router'
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Login from '../Login'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/Home">首页</Link>
            <Link to="/Login">登录</Link>
            <Switch>
              {routes.map((item, key) => {
                return <Route exact={true} key={key} path={item.path} component={item.component} routerWillLeave={this.leavel}/>
              })}
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Home
