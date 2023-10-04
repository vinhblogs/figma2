import React from 'react'
import "./holiday.css"
import Holiday_div from './Holiday_div'
import Pre_Next from '../Prev_Next/Pre_Next'
const Holiday = () => {
  return (
    <div className='holiday'>
        <h1>Perfect Holiday Plan</h1>
        <p>If you contact most of the travel agencies to help you plan your vacation, they would offer a pre-planned holiday packages in group.</p>
        <Pre_Next className={"holiday-btn"}/>
        <div className="holiday-beach">
            <Holiday_div link={"./images/holiday1.png"} map={"./images/map.png"} nameCountry={"Maldives"} address={"Hurawalhi Island"} 
            timetable="7 Days Tour on 2 person" price={"620 $"} link_star={"./images/star.png"} pointStar="4.7"/>
            <Holiday_div link={"./images/holiday2.png"} map={"./images/map.png"} nameCountry={"Indonesia"} address={"Bali Province"} 
            timetable="4 Days Tour on 2 person" price={"780 $"} link_star={"./images/star.png"} pointStar="4.7"/>
            <Holiday_div link={"./images/holiday3.png"} map={"./images/map.png"} nameCountry={"Spain"} address={"Barcelona city beach"} 
            timetable="4 Days Tour on 4 person" price={"850 $"} link_star={"./images/star.png"} pointStar="4.7"/>
            
        </div>
        
    </div>
  )
}

export default Holiday