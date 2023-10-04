import React from 'react'
import "./our_blog.css"
import Button from '../button/Button'
import Blog_cards from './Blog_cards'

const Our_Blog = () => {
  return (
    <div className='our_blog'>
        <h1>Stay Update with Travio Tips</h1>
        <div className='our_blog-cards'>
            <Blog_cards card_links={"./images/blog1.png"} title={"Including animation in your design system."} 
           time={"By Admin - January 25, 2021"} des={"A leisurely start as not expected at our next campsite...."}/>
            <Blog_cards card_links={"./images/blog2.png"} title={"Including animation in your design system."} 
           time={"By Admin - January 25, 2021"} des={"There is always one constant about international travel..."}/>
           <Blog_cards card_links={"./images/blog3.png"} title={"Including animation in your design system."} 
           time={"By Admin - January 25, 2021"} des={"Just for once we were trying to forget Covid . We were out for the morning..."}/>
        </div>
        <div className="special-down"> <Button name={"All Blog Posts"} className={"button-bg-white-center"}/></div>
    </div>
  )
}

export default Our_Blog