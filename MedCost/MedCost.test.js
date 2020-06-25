import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MedCost from './MedCost';

describe('medcost component', () => {
    const props = {
        count: 1
    }

    it('renders comp by default', () => {
        const wrapper = shallow(<MedCost/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('renders the comp given props', () => {
        const wrapper = shallow(<MedCost {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})