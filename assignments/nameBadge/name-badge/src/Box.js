import React from 'react';


class box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            persons: []
         }
    }
    render() { 
        return ( 
            <>

                <form onClick={this.handleClick}>
                    <input type="text"
                            placeholder='First Name'    
                            name='fName'
                            value={this.state.name}
                    />
                    <input type="text"
                            placeholder='Last Name'
                            name='lName'
                            value={this.state.name}
                    /> <br/>
                    <input type="text"
                            placeholder='Email'
                            name='email'
                            value={this.state.name}
                    />
                    <input type="text"
                            placeholder='Place of Birth'
                            name='pBirth'
                            value={this.state.name}
                    /> <br/>
                    <input type="number"
                            placeholder='Phone Number'
                            name='pNumber'
                            value={this.state.name}
                    />
                    <input type="text" 
                            name="fFood" 
                            placeholder="Favorite Food" 
                            value={this.state.name}
                    /> <br/>
                    <input type="text"
                            placeholder='Tell us about yourself'
                            name='description'
                            value={this.state.name}
                    /> <br/>
                    <button>Submit</button>
                </form>
            </>
         );
    }
}
 
export default box;