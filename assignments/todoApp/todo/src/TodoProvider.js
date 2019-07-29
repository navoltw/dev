import React, { Component } from 'react';
import axios from 'axios';

//First thing you do to create a new context/Global State
const {Provider, Consumer} = React.createContext()

class TodoProvider extends Component {
    constructor(){
        super()

        //Global State --> can be accessed anywhere in Application
        this.state = {
            todos: []
        }
    }

    getTodos = () => {
        let userData; // this is equal to form data
        // axios.get('https://api.vschool.io/marcus/todo').then((response)=> {
        //     this.setState({todos: response.data})
        axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${userData}')
        })
    }

    render() {
        return (
            // Provider Stores all your global information
            // When you add a method to your provider, it must be added as a key: value pair. i.e. getTodos: this.getTodos
            <Provider value={{
                ...this.state,
                getTodos: this.getTodos
            }} >
                {/* In this case App is the child being referenced --> See index.js */}
                {this.props.children}
            </Provider>
        );
    }
}

export default TodoProvider;

export function withTodos(Comp){
    //Consumer makes the global information accessible
    return props => <Consumer>
                            {/* Value --> every thing in the value object on line 27 */}
                            {/* Props --> everything that is passed in as props to the component you are calling withTodos on, i.e. withTodos(App) */}
                        {value => <Comp {...props}{...value} />}
                    </Consumer>
}

