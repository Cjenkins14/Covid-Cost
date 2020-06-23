import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import states from '../states';

class Home extends Component {
    
    render() {
        console.log(states)
        return (
            <div className="app">
            <header>
            <h1>Covid Cost</h1>
            <p>
              This app is built upon The Covid Tracking Project's API: <br/>
              <a href="https://covidtracking.com/api" target="_blank" rel="noopener noreferrer">The Covid Tracking Project</a>
            </p>
            </header>

            <h2>Community Cost</h2>
            <p>
                One aspect of reopening that was undetermined when the decisions were made was the real cost to our communities. <br/>
                Now we are able to take data from the recorded case numbers and run estimations of the cost of the outbreak. <br/>
                This is only for the cost in life and medical expenses, other data points may be added at a later date.
            </p>

            <Link to='/search'>Search your state</Link>


            
            
            </div>
        )
    }
}

export default Home;