import React, {Component} from 'react';
import config from '../config';
import './Human.css';
import CovContext from '../CovContext';
import Cost from '../DeathCost/DeathCost';
import Nav from '../Nav/Nav'

class Human extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deaths: 0
        }
    }
    static contextType = CovContext;

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}` + `${this.context.stateCode}/current.json`)
            .then(res => {
                if(!res.ok) 
                    return res.json().then(e => Promise.reject(e));
                return res.json()
            })
            .then(data => {
                this.setState({
                    deaths: data["death"]
                }, () => {console.log()})
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
        let deaths = this.state.deaths
        return (
            <>
            <Nav/>
            <div className='human-main'>       
            <h2>Human Cost</h2> 
            <button onClick={this.info}>info</button>

            <section id='description' className='hidden'>
            <p>
                The human cost of the outbreak is an estimation based upon the price that the federal government <br/>
                have used for years as an estimator to what a human life is worth economically. That number is $10 million.<sub> 1</sub>
            </p>
            <a href='https://www.npr.org/transcripts/835571843' target='_blank' rel='noopener noreferrer'>[1]</a>
            </section>

            
            <Cost count={deaths}/>
            </div>
            </>
        )
    }

}

export default Human;
