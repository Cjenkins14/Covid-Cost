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
            data: null,
            deaths: null,
            positive: null
        };
    }
   handleSubmit = (e) => {
       e.preventDefault()
       let element = document.getElementById('state')
       let stateCode =  element.options[element.selectedIndex].text.toLowerCase()
       console.log(stateCode)
       
       fetch(`${config.API_ENDPOINT}` + `${stateCode}/current.json`)
            .then(res => {
                if(res.ok) 
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(data => {
                this.setState({
                    data: data,
                    positive: data.positive,
                    deaths: data.death
                }, () => {console.log(data)})
            })
            .catch(error => {
                console.log(error)
            });   
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