import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div  className='footer' id='footer'>
      <div className="footer-contents">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae, dolor accusamus culpa perspiciatis, delectus quam debitis architecto fuga doloremque quo iste aspernatur doloribus eligendi nostrum ipsam. Unde, distinctio porro?</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>

        </div>
        <div className="footer-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 9632915734</li>
            <li>tomato@gmail.com</li>
          </ul>

        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        ALl rights are reserved @tomato@gmail.com      </p>
      </div>
  )
}

export default Footer