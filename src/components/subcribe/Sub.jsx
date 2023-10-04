import React from 'react'
import "./sub.css"
import Button from '../button/Button'

const Sub = () => {
  return (
    <div className='sub'>
        <div className="sub-main">
            <h1 className='title-sub'>Subscribe our newsletter and get update everytime.</h1>
            <div className='left-icon'><img src="./images/sub_left.png" alt="" /></div>
            <div className='right-icon'><img src="./images/sub_right.png" alt="" /></div>
            <div className='input-email'>
                <input type="text" placeholder='Enter your email'/> 
                <Button name={"Get Started"}/>
            </div>
        </div>
    </div>
  )
}

export default Sub