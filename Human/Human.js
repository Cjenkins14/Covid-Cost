import React, {Component} from 'react';
import config from '../config'
import './Human.css'


class Human extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateCode: this.props.stateCode 
        };
    }

    componentDidMount() {
        
        fetch(`${config.API_ENDPOINT}` + `${this.state.stateCode}/current.json`)
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

    info = () => {
        let desc = document.getElementById('description')
        desc.classList.toggle('hidden')    
    }


    render() {
        console.log(this.state.stateCode)
        return (
            <div className='econ-main'>       
            <h3>Human Cost</h3> <button onClick={this.info}>info</button>

            <section id='description' className='hidden'>
            <p>
                The human cost of the outbreak is an estimation based upon the price that the federal government <br/>
                have used for years as an estimator to what a human life is worth economically. That number is $10 million.
            </p>
            <a href='https://www.npr.org/transcripts/835571843' target='_blank' rel='noopener noreferer'>[1]</a>
            </section>

            <ul>
        <li>Cumulative Deaths: {this.state.deaths}</li>
            </ul>
            </div>
        )
    }

}

export default Human;
