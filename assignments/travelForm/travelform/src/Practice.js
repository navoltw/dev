import React from 'react';


class Practice extends React.Component {
    constructor(){
        super()

        this.state = {
            fName: '',
            lName: '',
            selectedSoda: '',
            gender: '',
            isChecked: false,
            checkedItems: [],
            people: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }

    handleCheckbox = (event) => {
        let {value, checked} = event.target
        checked ? 
            this.setState(prevState => {
                return {
                    isChecked: checked,
                    checkedItems: [...prevState.checkedItems, value]
                }
            })
            :
            this.setState(prevState => {
                return {
                    isChecked: checked,
                    checkedItems: prevState.checkedItems.filter((checkedItem)=> checkedItem !== value )
                }
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newPerson = {
            fName: this.state.fName,
            lName: this.state.lName,
            selectedSoda: this.state.selectedSoda
            }

        this.setState((prevState)=>{
            return {
                people: [...prevState.people, newPerson]
            }
        }, ()=>{
            this.clearForms()
        })

    }

    clearForms = () => {
        this.setState({
            fName: '',
            lName: '',
            selectedSoda: '',
            gender: '',
            isChecked: false,
        })
    }

    render() {
        const mappedPeople = this.state.people.map((person, i)=> {
            return <div key={i + person.fName}>
                        <h1>{person.fName} {person.lName}</h1>
                    </div>
        })
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
                    Male
                    <input  type="radio" 
                            name="gender"
                            value="male"
                            onChange={this.handleChange}
                            />
                    Female                    
                    <input  type="radio" 
                            name="gender"
                            value="female"
                            onChange={this.handleChange}
                            />
                    Other
                    <input  type="radio" 
                            name="gender"
                            value="other"
                            onChange={this.handleChange}
                            />
                    <select name='selectedSoda' value={this.state.selectedSoda} onChange={this.handleChange}>
                        <option value="CocaCola">Coca Cola</option>
                        <option value="Pepsi">Pepsi</option>
                        <option value="Dr. Pepper">Dr. Pepper</option>
                        <option value="Surge">Surge</option>
                    </select>
                    <label>
                        Cookie
                        <input type="checkbox" value='cookie' name="isChecked" onChange={this.handleCheckbox} />
                    </label>
                    <label>
                        Chips
                        <input type="checkbox" value='chips' name="isChecked" onChange={this.handleCheckbox} />
                    </label>
                    <label>
                        Pickle
                        <input type="checkbox" value='pickle' name="isChecked" onChange={this.handleCheckbox} />
                    </label>
                    <button>Submit</button>
                </form>
                {mappedPeople}
            </>
        );
    }
}

export default Practice;