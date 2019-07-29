import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Tings from './Tings'
import About from './About'
import './styles.css'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return(
        <>
            <Navbar />
                <Switch>
                    <Route  exact path='/Home' component={Home}/>
                    <Route  path='/Tings' component={Tings}/>
                    <Route path='/About' component={About} />
                </Switch>
            <Footer />
        </>
    )
}

export default App
