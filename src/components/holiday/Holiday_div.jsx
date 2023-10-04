import React from 'react'
import "./holiday_div.css"
const Holiday_div = (props) => {
  return (
    <div className='holiday-block'>
        <div className='holiday-block-img'><img src={props.link} alt="" /></div>
        <div className="holiday-block-down">
            <div className="holiday-block-down-infor">
                <div className='holiday-country'>
                   <div className='conntry-map'><img src={props.map} alt="" /></div>          
                    <div className='location'>{props.nameCountry}</div>
                </div>
                <h4>{props.address}</h4>
                <div className='timetable'>{props.timetable}</div>
            </div>
            <div className="holiday-block-down-infor-buttom">
                <div className="holiday-price">{props.price}</div>
                <div className="holiday-star">
                   <div className='star-icon'><img src={props.link_star} alt="" /></div> 
                    <div className='point-star'>{props.pointStar}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Holiday_div