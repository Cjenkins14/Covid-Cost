import React, {Component} from 'react';
import './Search.css';
import states from '../states'
import Human from '../Human/Human'
import config from '../config'

class Search extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            state: ''
        };
    }
    
   handleSubmit = (e) => {
       e.preventDefault()
       let element = document.getElementById('state')
       let stateCode =  element.options[element.selectedIndex].text.toLowerCase()
       this.setState({
           state: stateCode
       })
       
   }

    render() {
        
        return (
            <div className='search-main'>
            <header><h1>Search</h1></header>
            <img src="/home/cj/Public/Projects/reopen-cost-app/covid-cost/src/Images/covid.jpg" alt='Covid 19 virus'></img><br/>
        
            <label htmlFor='state-select'>Select a state</label><br/>
            <form>    
            <select id='state' className='state-select'>
                {states.map((state) => {
                    return <option key={state}>{state}</option>
                })}
            </select> <br/>
            <button type='submit' onClick={this.handleSubmit}>See Results</button>
            </form>

            <Human stateCode={this.state.state}/>
            </div>
        )
    }
}

export default Search;