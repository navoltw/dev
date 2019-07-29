import React from 'react'
import './styles.css'
import Box from './Box.js'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            squares: ['white', 'white', 'white', 'white']
    }

    }

    

    blackOrWhite = () => {
        this.setState(
            prevState => {
                if (prevState.squares[0] === 'black') {
                    return {
                        squares: ['white', 'white', 'white', 'white']
                    }
                } else {
                    return {
                        squares: ['black', 'black', 'black', 'black']
                    }
                }
            }
        )
    }

    purple = () => {
        this.setState(
            prevState => {
                if (prevState.squares[0] === '') {
                    return {
                        squares: ['purple', 'purple', prevState, prevState]
                    }
                } else {
                    return {
                        squares: ['purple', 'purple', prevState, prevState]
                    }
                }
            }
        )
    }



    randomColor = () => {
        const colors = ['pink', 'crimson', 'blue', 'palegreen', 'magenta', 'purple', 'aquamarine', 'rebeccapurple', 'yellow']
        const boxOne = colors[Math.floor(Math.random()*colors.length)]
        const boxTwo = colors[Math.floor(Math.random()*colors.length)]
        const boxThree = colors[Math.floor(Math.random()*colors.length)]
        const boxFour = colors[Math.floor(Math.random()*colors.length)]
        this.setState({
            squares: [boxOne, boxTwo, boxThree, boxFour]
        })
    }

    rBlue = () => {
        this.setState(
            prevState => {
                if (prevState.squares[0] === '') {
                    return {
                        squares: [prevState, prevState, prevState, 'blue']
                    }
                } else {
                    return {
                        squares: [prevState, prevState, prevState, 'blue']
                    }
                }
            }
        )
    }
    

    lBlue = () => {
        this.setState(
            prevState => {
                if (prevState.squares[0] === '') {
                    return {
                        squares: [prevState, prevState, 'prevState', prevState]
                    }
                } else {
                    return {
                        squares: [prevState, prevState, 'blue', prevState]
                    }
                }
            }
        )
    }

    render(){
        return (
            <>
                <div className='square-container'>
                    <Box color={this.state.squares[0]}/>
                    <Box color={this.state.squares[1]}/>
                    <Box color={this.state.squares[2]}/>
                    <Box color={this.state.squares[3]}/>
                </div>
                <button onClick={this.blackOrWhite}>Black or White</button>
                <button onClick={this.randomColor}>Random Color</button>
                <button onClick={this.purple}>purple</button>
                <button onClick={this.rBlue}>Right Bottom Blue</button>
                <button onClick={this.lBlue}>Left Bottom Blue</button>
            </>
        )
    }

}


export default App


// import React from 'react';
// import './styles.css'
// import Box from './Box'

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = { 
//             squares: ['white', 'white', 'white', 'white']
//          }
//     }


//     blackOrWhite = () => {
//         this.setState(
//             prevState => {
//              if (prevState.squares[0] === 'black'){
//                  return {
//                     squares: ['white', 'white', 'white', 'white']
//                  }
//              }else {
//                  return{
//                     squares: ['black', 'black', 'black', 'black']
//                  }
//              }
                
//             }
//         )
//     }



//     randomColor = () => {
//         const colors = ['palegreen', 'crimson', 'skyblue', 'magenta', 'teal', 'purple',]
//         const boxOne = colors[Math.floor(Math.random()*colors.length)]
//         const boxTwo = colors[Math.floor(Math.random()*colors.length)]
//         const boxThree = colors[Math.floor(Math.random()*colors.length)]
//         const boxFour = colors[Math.floor(Math.random()*colors.length)]
//         this.setState({
//             squares : [boxOne, boxTwo, boxThree, boxFour]
//         })
//     }



//     render() { 
//         return ( 
//         <>
//         <div className='square-container'>
//             <box color={this.state.squares[0]} />
//             <box color={this.state.squares[1]} />
//             <box color={this.state.squares[2]} />
//             <box color={this.state.squares[3]} />
//         </div>
//             <button onClick={this.blackOrWhite}>Black or White</button>
//             <button onClick={this.randomColor}>Random</button>
//             <button></button>
//             <button></button>
        
//         </>
//          )
//     }
// }
 
// export default App;
