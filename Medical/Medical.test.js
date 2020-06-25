import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Medical from './Medical';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <Medical />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})