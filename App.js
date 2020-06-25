import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';
import Home from './Home/Home';
import Search from './Search/Search';
import Human from './Human/Human';
import Medical from './Medical/Medical';
import CovContext from './CovContext';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateCode: ''
    };
  };
  
  pushState = (state) => {
    this.setState({
      stateCode: state
    })
  };

  render() {
    const value = {
      stateCode: this.state.stateCode,
      pushState: this.pushState
    }
    return (
      <CovContext.Provider value={value}>
      <>
      <Route
      exact path='/'
      component={Home}
      />

      <Route
      exact path='/search'
      component={Search}
      />
      <Route
      exact path='/human'
      component={Human}
      />
      <Route
      exact path='/medical'
      component={Medical}
      />
      </>
      </CovContext.Provider>
    )
  };
};

export default App;
