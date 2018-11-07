import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
class App extends Component {
  routerWillLeave(nextLocation){
    console.log("将要离开")
  }
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
