import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = { 
            fName: '',
            lName: '',
            gender: '',
            travelLocations: '',
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
                    checkedItems: prevState.checkedItems.filter((checkedItem)=> checkedItem !== value)
                }
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newPerson = {
            fName: this.state.fName,
            lName: this.state.lName,
            travelLocations: this.state.travelLocations,
            gender: this.state.gender,
            isChecked: this.state.isChecked
        }
        this.setState((prevState) => {
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
            travelLocations: '',
            gender: '',
            isChecked: false,
        })
    }


    render() { 
        const mappedPeople = this.state.people.map((person, i) => {
            return <div key ={i + person.fName}>
                <h1>{person.fName} {person.lName} {person.gender} {person.travelLocations} {person.isChecked}`</h1>
            </div>
        })
        return ( 
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                        placeholder="First Name"
                        name="fName"
                        value={this.state.fName}
                        onChange={this.handleChange}

                />
                <input type="text"
                        placeholder="Last Name"
                        name="lName"
                        value={this.state.lName}
                        onChange={this.handleChange}
                /> 
                <br/>
                Female
                <input type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange}
                />
                Male
                <input type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange}
                /> 
                <br/>
                <select name="travelLocations" value={this.state.travelLocations} onChange={this.handleChange}>
                    <option value="Japan">Japan</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Neptune">Neptune</option>
                </select>
                <br/>
                <label>
                    Dietary Restrictions
                </label> 
                <br/>
                <label>
                    Vegetarian
                    <input type="checkbox" value='vegetarian' name="isChecked" onChange={this.handleCheckbox}/>
                </label>
                <label>
                    Kosher
                    <input type="checkbox" value='kosher' name="isChecked" onChange={this.handleCheckbox}/>
                </label>
                <label>
                    Sushi
                    <input type="checkbox" value='sushi' name="isChecked" onChange={this.handleCheckbox}/>
                </label> 
                <br/>
                <button>Submit</button>
            </form>
            {mappedPeople}
            </>
         )
    }
}
 
export default Form;

