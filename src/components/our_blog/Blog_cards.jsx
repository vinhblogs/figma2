import React from 'react'
import "./blog_cards.css"

const Blog_cards = (props) => {
  return (
    <div className='blog_cards'>
        <div className='cards-img'><img src={props.card_links} alt="" /></div> 
        <h2 className='cards-title'>{props.title}</h2>   
        <p className='time'>{props.time}</p>
        <div className='cards-des'>{props.des}</div>
    </div>
  )
}

export default Blog_cards