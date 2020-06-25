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
    
   

    render() {
        
        return (
            <div className='search-main'>
            <header><h1>Search</h1></header>
            <img src="/home/cj/Public/Projects/reopen-cost-app/covid-cost/src/Images/covid.jpg" alt='Covid 19 virus'></img><br/>
        
            

            
            </div>
        )
    }
}

export default Search;