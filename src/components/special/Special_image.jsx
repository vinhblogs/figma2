import React from 'react'
import "./special_image.css"
import Button from '../button/Button'

const Special_image = (props) => {
  return (
    <div className='special_cards'>
        <div className='special_cards-img'>
            <img src={props.link} alt="" />
            <p>{props.price}</p>
        </div>
        <div className="special-cards-down">
            <div className='special-cards-down-left'>
                <h4>{props.country}</h4>
                <p>{props.time}</p>
            </div>
           <div className='btn-booknow'><Button className={"button-bg-blue-small"} name={"Book Now"}/></div> 
        </div>
    </div>
  )
}

export default Special_image