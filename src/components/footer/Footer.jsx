import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>
        <footer>
          <div className="footer-up">
            <div className="footer-up-logo">
                  <div className="footer-up-logo-icon">
                    <img src={process.env.PUBLIC_URL+"./images/logo2.png"} alt="" />
                  </div>
                  <div className="footer-up-logo-des">
                    <p>We believe brand interaction is key in commu- nication. Real innovations and a positive.</p>
                  </div>
            </div>
            <div className="footer-up-menu">
              <div className="footer-menu-links">
                <h4>Company</h4>
                <a href="/about us"><p>About us</p></a>
                <a href="/company"><p>Company</p></a>
                <a href="/press-blog"><p>Press & Blog</p></a>
                <a href="/privacy"><p>Privacy Policy</p></a>
              </div>

              <div className="footer-menu-links">
                <h4>Services</h4>
                <a href="/how-it-work"><p>How it works</p></a>
                <a href="/our-blog"><p>Our Blog</p></a>
                <a href="/our-service"><p>Our Services</p></a>
                <a href="/contact-us"><p>Contact Us</p></a>
              </div>

              <div className="footer-menu-links">
                <h4>Quick Link</h4>
                <a href="/press-center"><p>Press Centre</p></a>
                <a href="/travel-news"><p>Travel News</p></a>
                
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="footer-down">
            <div className="footer-down-coppyright">
              <p>Besnik ©{new Date().getFullYear()} All Right Reserved</p>
            </div>
            <div className="footer-down-links">
              <a href="/term-of-service">Term of Service</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </footer>

    </div>
  )
}

export default Footer