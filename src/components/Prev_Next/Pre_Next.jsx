import React from 'react'
import "./pre_next.css"
const Pre_Next = (props) => {
  return (
    <div className={'pre_next '+ props.className}>
        <div className={'pre '+props.preName}><img src="./images/pre.png"alt="" /></div>
        <div className={'next '+props.nextName}><img src="./images/pre.png" alt="" /></div>
    </div>
  )
}

export default Pre_Next