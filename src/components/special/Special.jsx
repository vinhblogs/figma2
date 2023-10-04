import React from 'react'
import "./special.css"
import Button from '../button/Button'
import Special_image from './Special_image'

const Special = () => {
  return (
    <div className='special'>
        <div className="special-up">
            <h1>Special offers & Discounts</h1>
            <p>Travel by water often provided more commfort and speed than land-travel.</p>
        </div>
        <div className="special-mid">
            <Special_image link={"./images/sp_img1.png"} country={"Japan"} time={"6 day 6 Nights"} price={"$ 450"}/>
            <Special_image link={"./images/sp_img2.png"} country={"Italy"} time={"7 day 6 Nights"} price={"$ 390"}/>
            <Special_image link={"./images/sp_img3.png"} country={"Canada"} time={"6 day 5 Nights"} price={"$ 430"}/>
            <Special_image link={"./images/sp_img4.png"} country={"Brazil"} time={"6 day 5 Nights"} price={"$ 410"}/>
            
        </div>
        <div className="special-down"> <Button name={"See More"} className={"button-bg-white-center"}/></div>
       

    </div>
  )
}

export default Special