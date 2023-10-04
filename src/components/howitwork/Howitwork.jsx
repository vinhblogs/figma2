import React from 'react'
import "./howitwork.css"
import Works from './Works'
const Howitwork = () => {
  return (
    <div className='how-it-works'>
      <div className='how-it-works-left'>
        <h1>How It Works</h1>
        <p>Apply here for a monthly subscription to Globetrotter, which is issued once a month.</p>
      </div>
      <div className="how-it-works-right">
        <Works className={" div1"} images={"img1"} link="images/signup.png" name={"Sign Up"} title={"Employees set their per paycheck contribution"}/>
        <Works className={" div2"} images={"img2"} link="images/signup.png" name={"Contribute"} title={"Employers make a matching contribution"}/>
        <Works className={" div3"} images={"img3"}link="images/signup.png" name={"Travel"} title={"Employees book their travel & vacation with their Taab card"}/>
      
      </div>
    </div>
  )
}

export default Howitwork