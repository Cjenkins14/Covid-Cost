import React, {Component} from 'react';
import './Medical.css';

class Medical extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateCode: ''
        }
    };

    componentDidMount() {

    };

    render() {
        return (
            <>
            <h3>Medical</h3>
            <section id='description' className='hidden'>
                <p>
                    The medical cost is determined by the number of admitted patients on the given day. <br/>
                    The average medical cost of someone hospitalized for Covid-19 is $30k.<sub>1</sub> <br/>

                </p>
                <a href='https://time.com/5806312/coronavirus-treatment-cost/' target='_blank' rel='noopener noreferer'>[1]</a>
            </section>
            </>
        )
    };
};

export default Medical;