import React, { Component } from 'react';
import axios from 'axios'

const ActivityContext = React.createContext()


class ServiceProvider extends Component {
    constructor(){
        super()
        this.state ={
            activities:[]
        }
    }

    componentDidMount(){
        this.getActivities()
     }
 
     getActivities = () => {
         axios.get('https://vschool-cors.herokuapp.com?url=https://www.boredapi.com/api/activity')
         .then(response => {
             console.log('axios data: ', response.data.activity)
             this.setState({
                 activities: [response.data.activity]
             })
         })
         .catch(err => console.log(err))
     }

    render() {
        return (
            <ActivityContext.Provider
                value={{
                    ...this.state,
                    getActivities: this.getActivities
                }}>
                    {this.props.children}
            </ActivityContext.Provider>
        )
    }
}

export default ServiceProvider;

export const withActivities = C => props => (
    <ActivityContext.Consumer>
        { value => <C {...value} {...props} /> }
    </ActivityContext.Consumer>
)
