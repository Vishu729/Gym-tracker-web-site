import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="social-media">
            <img src={Github} alt="" onClick={() => window.open('https://github.com/Vishu729/Gym-tracker-web-site', '_blank')} />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
            </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Footer
