import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">

        <Header/>
{/* top advertisement banner */}
        <div className="the-best-ad">
            <div></div>
            <span>24x7 fitness club</span>
        </div>
     {/* Gym Name Heading */}
     <div className="hero-text"> 
        <div>
            <span className='stroke-text'>Sculpt </span>
            <span>Your</span>
        </div>
        <div>
            <span>Gym Goals</span>
        </div>
        <div>
                <span>We are open 24x7</span>
            </div>
     </div>

     {/* model shots */}
        <div className="figures">
        <div >
            <span>+1400 </span>
            <span>members joined</span>
       </div>
       <div >
            <span>+200 </span>
            <span>coaches</span>
       </div>
       <div >
            <span>state of art</span>
            <span>equipments</span>
       </div>
        </div>
       {/* Buttons for the gym website */}

        <div className="hero-buttons">
            <butons className="btn">Click here to start</butons>
            <butons className="btn">Additional information</butons>
        </div>


    </div>
        <div className="right-h">right side</div>
        </div>
  )
}

export default Hero
