import React from 'react'
import "./header.css"
import {Link} from "react-router-dom";
import Button from '../button/Button';
const Header = () => {
  return (
    <header>
        <nav>
            <div className="nav-logo">
                <span><img src={process.env.PUBLIC_URL+'/images/logo_nav.png'} alt="logo-nav" /></span>
                <span><img src={process.env.PUBLIC_URL+'/images/logo_text.png'} alt="logo_text" /></span>
            </div>   
            <div className="link-contact">
                <ul className="nav-links">  
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/destinations">Destinations</Link>
                    <Link to="/tours">Tours</Link>
                    <Link to="/blog">Blog</Link>
                </ul>
                {/* button */}
                <Button className="button-bg-blue" name={"Contact Us"}/>
            </div>       
        </nav>

        {/* header content */}

        <div className="header-content">
            <div className="header-content-on">
                <div className="header-content-on-text">
                    <h1>Tour your dream destination with tourve.</h1>
                    <p>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
                    <button>Discovery Now</button>
                </div>
                <div className="header-content-on-images">
                    <div className="header-content-on-images-left">
                        <img src={process.env.PUBLIC_URL+'/images/image1.png'} alt="" />
                        <div className='header-content-on-images-left-card'>
                            <div className='card-head'>
                                <div className='card-head-icon'><img src={process.env.PUBLIC_URL+'/images/card-icon.png'} alt="" /></div>
                                <div className='card-head-dot'><img src={process.env.PUBLIC_URL+'/images/dot.png'} alt="" /></div>
                            </div>
                            <div className='card-content'>
                                <div className='card-content-div'>
                                    <div className='card-content-div-img'><img src={process.env.PUBLIC_URL+'/images/lu.jpg'} alt="" /></div>
                                    <div  className='card-content-div-name'>
                                        <h6>Cham QP</h6>
                                        <p>Touris</p>
                                    </div>
                                </div>
                                <div className='card-content-div'>
                                    <div  className='card-content-div-img'><img src={process.env.PUBLIC_URL+'/images/lu.jpg'} alt="" /></div>
                                    <div  className='card-content-div-name'>
                                        <h6>Cham QP</h6>
                                        <p>Touris</p>
                                    </div>
                                </div>
                                <div className='card-content-div'>
                                    <div  className='card-content-div-img'><img src={process.env.PUBLIC_URL+'/images/lu.jpg'} alt="" /></div>
                                    <div  className='card-content-div-name'>
                                        <h6>Cham QP</h6>
                                        <p>Touris</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='header-content-on-images-left-union'><img src={process.env.PUBLIC_URL+'/images/union.png'}  alt="" /></div>
                        
                    </div>
                    <div className="header-content-on-images-right">
                        <img src={process.env.PUBLIC_URL+'/images/ye-man.png'} alt="" />
                        <div className='header-content-on-images-right-union'><img src={process.env.PUBLIC_URL+'/images/union.png'} alt="" /></div>
                        <div className='header-content-on-images-right-airplan'><img src={process.env.PUBLIC_URL+'/images/Vector_airplan.png'} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="header-content-button">
                <div className="header-content-button-block">
                    <div className="block">
                        <h4>Where</h4>
                        <div className='information'>
                            <p>Center Point, Lo...</p>
                            <div className='icon'><img src={process.env.PUBLIC_URL+'/images/map.png'}alt="" /></div>
                        </div>
                    </div>
                    <div className="block">
                    <h4>Where</h4>
                        <div className='information'>
                            <p>09th March,2021</p>
                            <div className='icon'><img src={process.env.PUBLIC_URL+'/images/date.png'}alt="" /></div>
                        </div>
                    </div>
                    <div className="block">
                    <h4>Where</h4>
                        <div className='information'>
                            <p>05</p>
                            {/* <div className='icon'><img src={process.env.PUBLIC_URL+'/images/down.png'}alt="" /></div> */}
                            <div className='icon'><img src='./images/down.png' alt="" /></div>
                            
                        </div>
                    </div>
                    <Button className="button-bg-blue-big" name="Search Plan"/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header