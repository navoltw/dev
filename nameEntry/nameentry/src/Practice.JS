import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            fName: '',
            lName: '',
            people: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newPerson = {
            fName: this.state.fName,
            lName: this.state.lName
        }

        this.setState((prevState)=>{
            return {
                people: [...prevState.people, newPerson]
            }
        })

    }

    render() {
        const mappedPeople = this.state.people.map((person, i)=> {
            return <div key={i + person.fName}>
                        <h1>{person.fName} {person.lName}</h1>
                    </div>
        })
        console.log(this.props)
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input  type="text"
                            placeholder="First Name" 
                            name="fName"
                            value={this.state.fName}
                            onChange={this.handleChange}
                            />
                    <input  type="text"
                            placeholder="Last Name" 
                            name="lName"
                            value={this.state.lName}
                            onChange={this.handleChange}
                            />
                    <button>Submit</button>
                </form>
                {mappedPeople}
            </>
        );
    }
}

export default Form;