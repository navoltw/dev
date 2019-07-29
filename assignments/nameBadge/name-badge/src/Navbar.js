import React from 'react';
import './styles.css'
import axios from 'axios'

class navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        axios.get('http://www.colr.org/json/colors/random/7').then(res.data; this.setState)
    }
    
    render() { 
        return ( 
             <div className='navbar-container'>
                <div>Badge:</div>
            </div>
         );
    }
}
 

export default Navbar;