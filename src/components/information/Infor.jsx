import React from 'react'
import Button from '../button/Button'
import "./infor.css"
const Infor = (props) => {
  return (
    <div className={'infor '+props.classNameInfor}>
        <h1 className='title-infor'>{props.title}</h1>
        <p className='title-text'>{props.text}</p>
        <Button className={"button-bg-white-center"} name={"Find Best Tours"}/>
    </div>
  )
}

export default Infor