import React, {Component} from 'react';
import './Search.css';
import states from '../states'



class Search extends Component {
   handleSubmit = (e) => {
       e.preventDefault()
       let state = document.getElementById('state')
       let stateCode =  state.options[state.selectedIndex].text
       return console.log(stateCode)
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
            </div>
        )
    }
}

export default Search;