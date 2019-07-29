import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Navbar = () => {
    return(
        <>
        <header>
            <div class="container">
                <div id="branding">
                    <h1><span class="highlight">Tings</span></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/Tings' class='current'>Tings</Link></li>
                        <li><Link to='/About'>About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Navbar

