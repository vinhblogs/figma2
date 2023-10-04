import React from 'react'
import "./cards.css"
const Cards = (props) => {
  return (
    <div className={'card-comment '+props.className}>
        <p className='card-text'>{props.detail}</p>
        <div className='card-down'>
            <div className='card-img'>
              <img src={props.link_card} alt="" />
            </div>
            <div className='infor-audients'>
              <h4 className='name-aud'>{props.audients}</h4>
              <p className='position-aud'>{props.position}</p>
            </div>
            
        </div>
    </div>
  )
}

export default Cards