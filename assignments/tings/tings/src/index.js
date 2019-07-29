import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import Provider from './ServiceProvider'

ReactDOM.render(
    <Provider >
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </Provider> 
    , document.getElementById('root'))
