import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Human from './Human';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <Human/>
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})