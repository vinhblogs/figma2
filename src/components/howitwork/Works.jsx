import React from 'react'
import "./works.css"

const Works = (props) => {
  return (
    <div className={'works ' +props.className }>
        <div className = {'work-img '+props.images }><img src={props.link} alt="" /></div>
        <h2>{props.name}</h2>
        <p>{props.title}</p>
    </div>
  )
}

export default Works