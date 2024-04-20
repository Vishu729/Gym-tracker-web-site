import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
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
            <span>100+</span>
            <span>newequipments</span>
       </div>
        </div>
       {/* Buttons for the gym website */}

        <div className="hero-buttons">
            <butons className="btn">Click here to start</butons>
            <butons className="btn">Additional information</butons>
        </div>


    </div>
        <div className="right-h">
            <button className="btn">Join Now</button>

            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>120 bpm </span>
            </div>

        {/* Images for promotion */}
        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back'/>

        {/*macros div */}
        <div className="macros">
            <img src={Calories} alt="" />
            <div>
            <span>Calories burned</span><span>450 cal</span>
            </div>  
        </div>

        </div>
        </div>
  )
}

export default Hero
