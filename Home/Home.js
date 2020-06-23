import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div className="app">
            <h1>Covid Cost</h1>
            <p>
              This app is built upon The Covid Tracking Project's API: <br/>
              <a href="https://covidtracking.com/api" target="_blank" rel="noopener noreferrer">The Covid Tracking Project</a>
            </p>
            </div>
        )
    }
}

export default Home;