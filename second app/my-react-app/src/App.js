import React from 'react';
import './styles.css'
import './navbar/Navbar'
import Navbar from './navbar/Navbar'

const App = () => {
    return(
      <>
        <Navbar />
        <div className='main-container'>Hello World</div>
      </>
    )
}

export default App