import React, {Component} from 'react';
import CovContext from '../CovContext';
import Nav from '../Nav/Nav';
import config from '../config';
import MedCost from '../MedCost/MedCost';

import './Medical.css';

class Medical extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patients: 0
        }
    };
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
                    patients: data["hospitalizedCurrently"]
                }, () => {console.log(this.state.patients)})
            })
            .catch(error => {
                console.log(error)
            }); 
    };

    info = () => {
        let desc = document.getElementById('descriptionM')
        desc.classList.toggle('hidden')    
    }

    render() {
        let patients = this.state.patients;

        return (
            <>
            <h2>Medical</h2>
            <button onClick={this.info}>info</button>
            <section id='descriptionM' className='hidden'>
                <p>
                    The medical cost is determined by the number of admitted patients on the given day. <br/>
                    The average medical cost of someone hospitalized for Covid-19 is $30k.<sub>1</sub> <br/>

                </p>
                <a href='https://time.com/5806312/coronavirus-treatment-cost/' target='_blank' rel='noopener noreferrer'>[1]</a>
            </section>

            <MedCost count={patients}/>
            </>
        )
    };
};

export default Medical;