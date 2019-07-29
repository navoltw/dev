import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Navbar = () => {
    return(
        <>
            <header>
                <div class='container'>
                    <div id='branding'>
                        <h1><button class='button1' onClick={'/Home'}>WN</button></h1>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to='/Home'>Home</Link></li>
                            <li><Link to='/Portfolio'>Portfolio</Link></li>
                            <li><Link to='/Resume'>Resume</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar