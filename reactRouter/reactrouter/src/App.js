import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Footer from './Footer'

// import ReactRouterDOM from 'react-router-dom'

import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route  path='/about_page' component={About} />
                <Route  path='/' component={Home} />
            </Switch>
            <Footer />
        </>
    )
}

export default App
