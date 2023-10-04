import React from 'react'
import "./comment.css"
import Cards from './Cards'
import Pre_Next from '../Prev_Next/Pre_Next'

const Comment = () => {
  return (
    <div className='comment'>
        <h1 className='title-comment'>What Our Customer Say About Us</h1>
        <div className='comment-column'>
          <Cards className="card1" detail={"“Its very nice and quality services. I recommend it.”"} link_card={"./images/a3.jpg"} 
          audients={"Paul Johnston"} position="Regular Client"/>
          <Cards className="card2" detail={"“My nephew and I had a blast! All of the accommodations were perfect!”"} link_card={"./images/a4.jpg"} 
          audients={"Jon Hasan"} position="Regular Client"/>
        
          {/* <Cards/> */}
        </div>
        <div className='card-left'>
        <Cards className="card1" detail={"“This a very belated note (for which apologies) to thank you for the very outstanding services you provided to my daughter and to me during our trip to the Copper Canyon in September.”"} link_card={"./images/au1.jpg"} 
          audients={"Paul Johnston"} position="Regular Client"/>
        </div>
        <div className='card-right'>
        <Cards className="card1" detail={"“ I loved the capital of this country as I felt like it was only the time I got to see real Portugal. Its very nice and quality services. I recommend it. ”"} link_card={"./images/a3.jpg"} 
          audients={"Paul Johnston"} position="Regular Client"/>
        </div>
        <div className="prenext-comment"><Pre_Next className={"pre-next-comment"} preName={"pre-comment"} nextName={"next-comment"} /></div>
    </div>
  )
}
export default Comment



