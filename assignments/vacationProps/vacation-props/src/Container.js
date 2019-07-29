import React from 'react';
import Vacation from './Vacation';

const container = () => {
    const VacationInfo = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring",
          // backgroundColor: "green"
          
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter",
          // backgroundColor: 'blue'
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall",
          // backgroundColor: 'orange'
        
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer",
          // backgroundColor: 'yellow'
          
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring",
          // backgroundColor: "green"
        }
      ]



const mappedVacationInfo = VacationInfo.map((vacation, i) => {
    return < Vacation key={i} vacation={vacation} />
})

return(
    <div>
        {mappedVacationInfo}
    </div>
)
}
export default container