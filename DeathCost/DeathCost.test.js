import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeathCost from './DeathCost';

describe('Deathcost component', () => {
    const props = {
        count: 1
    }

    it('renders comp by default', () => {
        const wrapper = shallow(<DeathCost/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('renders the comp given props', () => {
        const wrapper = shallow(<DeathCost {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})