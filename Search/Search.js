import React, {Component} from 'react';
import './Search.css';
import states from '../states'
import Human from '../Human/Human'
import Medical from '../Medical/Medical'
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
           <>
           <Human/>
           <Medical/>
           </>
        )
    }
}

export default Search;