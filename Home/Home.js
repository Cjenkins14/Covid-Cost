import React, { Component } from 'react';
import states from '../states';
import CovContext from '../CovContext'
import Nav from '../Nav/Nav'

class Home extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }
    static contextType = CovContext;

    handleSubmit = (e) => {
        e.preventDefault()
        let element = document.getElementById('state')
        let stateCode =  element.options[element.selectedIndex].text.toLowerCase()
        this.context.pushState(stateCode)
        this.props.history.push('/result')
    }
    
    render() {
        
        return (
            <>
            <Nav/>
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

            <label htmlFor='state-select'>Select a state</label><br/>
            <form>    
            <select id='state' className='state-select'>
                {states.map((state) => {
                    return <option key={state}>{state}</option>
                })}
            </select> <br/>
            <button type='submit' onClick={this.handleSubmit}>See Results</button>
            </form>
            </div>
            </>
        )
    }
}

export default Home;