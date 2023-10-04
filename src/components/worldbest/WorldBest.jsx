import React from 'react'
import "./worldbest.css"
import Infor from '../information/Infor'

const WorldBest = () => {
  return (
    <div className='worldbest'>
        <div className="worldbest-left">
            <div className='world-ballon'><img src="./images/ballon.jpg" alt="" /></div>
            <div className='world-library'><img src="./images/libra.png" alt="" /></div>
            <div className='world-play'><img src="./images/playbtn.png" alt="" /></div>
            <div className='world-verify'><img src="./images/world-icon.png" alt="" /></div>
        </div>
        <div className="worldbest-right">
            <Infor title={"World Best Travel Agency Company Since."} text={"Travel agents are useful if you're doing a very costly or complex trip, planning a honeymoon or something fancy."}
            />
        </div>
    </div>
  )
}

export default WorldBest