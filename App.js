import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';
import Home from './Home/Home'
import Search from './Search/Search'


class App extends Component {
  

  render() {
    return (
      <>
      <Route
      exact path='/'
      component={Home}
      />

      <Route
      exact path='/search'
      component={Search}
      />
      </>
    )
  }
}

export default App;
