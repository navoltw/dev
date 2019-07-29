
import React from 'react';
import {withActivities} from './ServiceProvider'

 const Tings = (props) => {
     console.log('props', props)
     console.log('activities', typeof props.activities)
     return(
        <>
            <section id='images'>
                <div className='container'>
                { props.activities.map(activities =>
                        <div>
                            <h2>{activities}</h2>
                        </div>
                    )}
                </div>  
                <button onClick={props.getActivities} class='button1'>Tings</button>
            </section>
        </>
     )
 }
export default withActivities(Tings);