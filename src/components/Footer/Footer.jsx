import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
           <img src={assets.logo} alt="" />  
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, id alias culpa quaerat totam corporis provident ad earum mollitia nam delectus soluta quae quibusdam nisi! A, aspernatur. Dolore, voluptates iure.</p>   
           <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
            </div>
            
       
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
               <li>HOME</li>
               <li>ABOUT US</li>
               <li>DELIVERY </li>
               <li>PRIVACY POLICY</li>
            </ul>

        </div>
        <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+12-451-456-481</li>
    <li>contact@spoon.com</li>
</ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 spoon.com All-Right-Reserved</p>
    </div>
  )
}

export default Footer
