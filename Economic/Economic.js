import React, {Component} from 'react';
import './Economic.css'


class Economic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numHosp: this.props.hospitalized || null
        };
    }


    info = () => {
        let desc = document.getElementById('description')
        desc.classList.toggle('hidden')    
    }


    render() {
        return (
            <div className='econ-main'>       
            <h3>Economic Cost</h3> <button onClick={this.info}>info</button>

            <section id='description' className='hidden'>
            <p>
                The economic cost of the outbreak is an estimation, assuming the cost of a worker taking a sick day is <br/>
                approximately $370.<a href='https://www.ibiweb.org/poor-health-costs-us-employers-530-billion-and-1-4-billion-work-days-of-absence-and-impaired-performance/'>[1]</a> 
                This cost is multiplied by the cumulative number of hospitalized patients, then <br/>
                multiplied by 30 days, an average recovery time for severe cases.
            </p>
            </section>

            <ul>
                <li>Cumulative hospitalized:</li>
            </ul>
            </div>
        )
    }

}

export default Economic;
