import React, { useState } from 'react'
import "./Reviews.css"
import { reviewsData } from '../../data/reviewsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
const Reviews = () => {

    const [selected, setSelected] = useState(0);
    const rLength = reviewsData.length;
  return (
   <div className="Reviews">
    <div className="left-r">
     <span>Reviews </span>
     <span className='stroke-text'>Here's what people are </span>
     <span>saying about us</span>
     <span>
        {reviewsData[selected].review}
     </span>
     <span>
       <span style={{color: 'var(--orange)'}}>
       {reviewsData[selected].name}
       </span> {" "}
       - {reviewsData[selected].status}
     </span>
     
    </div>
    <div className="right-r">
      <div></div>
      <div></div>
        <img src={reviewsData[selected].image} alt="" />

        <div className="arrows">
            <img 
            onClick={()=>{
              selected === 0
              ? setSelected(rLength-1)
              : setSelected((prev)=>prev-1)
            }}
            src={leftArrow} alt="" />
            <img
             onClick={()=>{
              selected === rLength-1
              ? setSelected(0)
              : setSelected((prev)=>prev+1)
            }}
            src={rightArrow} alt="" />
        </div>
    </div>
   </div>
  )
}

export default Reviews
