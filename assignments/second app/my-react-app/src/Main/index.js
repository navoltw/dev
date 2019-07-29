import React from 'react';
import './styles.css'


const Main = () => {
    const person = {
        name: 'wayne',
        occupation: 'Bull fighter',
        favColor: 'purple'
    }
    return(
        <div className='main-container'>
            <div>{person.name}</div>
            <div>Occupation: {person.occupation}</div>
            <div>Favorite Color: {person.favColor}</div>
        </div>
    )
}

export default Main