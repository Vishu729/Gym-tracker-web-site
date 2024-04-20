import React from 'react'
import './Features.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import addidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Features = () => {
  return (
    <div>
      <div className="Features" id="features">
        <div className="left-f">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-f">
            <span>Reasons to choose us</span>
            <div>
                <span className='stroke-text'>Why </span>
                <span>Choose us?</span>
            </div>
            <div className='details-r'>

            <div>
                <img src={tick} alt=""></img>
                <span>Premium Equipment</span>
            </div>

            <div>
                <img src={tick} alt=""></img>
                <span>1-on-1 Coaching</span>
            </div>

            <div>
                <img src={tick} alt=""></img>
                <span>Active Community</span>
            </div>
            <div>
                <img src={tick} alt=""></img>
                <span>5-Star Amenities And Partners</span>
            </div>
            </div>
            <span style={{
                color: "var(--gray)",
                fontWeight: "normal",
                }}
                >OUR PARTNERS</span>
            <div className="partners">
                <img src={nike} alt="" />
                <img src={nb} alt="" />
                <img src= {addidas} alt="" />
            </div>    
        </div>
      </div>
    </div>
  )
}

export default Features
