import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            squares: ["white", "white", "white", "white"]
         }
    }


    colors = () => {
        this.setState((prevState) => {
            return{
                color: prevState.color
            }
        })
    }

    render() { 
        return ( 
        <div>
            <h1 class='grid'>Small Time Dj</h1>
            <ul>
                <li>Square color={this.state.colors[0]}</li>
                <li>Square color={this.state.colors[1]}</li>
                <li>Square color={this.state.colors[2]}</li>
                <li>Square color={this.state.colors[3]}</li>
                <button onClick={this.color}>submit</button>
            </ul>
        </div>
         );
    }
}
 
export default App;