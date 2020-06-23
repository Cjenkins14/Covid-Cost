import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home'
import { Route } from 'react-router';

class App extends Component {
  

  render() {
    return (
      <Route
      exact path='/'
      component={Home}
      />
    
    )
  }
}

export default App;
