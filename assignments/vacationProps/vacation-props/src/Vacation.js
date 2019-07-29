import React from 'react';

const Vacation = (props) => {
    console.log(props)
    let {place, price, timeToGo} = props.vacation;
    // console.log(props.vacation.timeToGo)
    
    const style = {};
    if (props.vacation.timeToGo === 'Summer'){
        style.backgroundColor='orange';
    }else if (props.vacation.timeToGo === 'Winter'){
        style.backgroundColor= 'skyblue';
    }else if (props.vacation.timeToGo === 'Fall'){
        style.backgroundColor= 'crimson';
    }else if (props.vacation.timeToGo === "Spring"){
        style.backgroundColor= 'palegreen';
    }
    

    let dollarSigns = '';
    if(price <= 500){
        dollarSigns = '$';
    }else if(price <= 1000){
        dollarSigns ='$$'
    }else if(price >= 1000){
        dollarSigns = '$$$'
    }

    return(
        <div style={style}>
            <h1>{place}</h1>
            <h2>{dollarSigns}{price}</h2>
            <h3>{timeToGo}</h3>
            
        </div>
    )
}

export default Vacation

 