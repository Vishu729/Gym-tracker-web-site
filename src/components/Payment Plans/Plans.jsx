import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png';
const Plans = () => {
  return (
     <div className="payment-plans-container">
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>START YOUR </span>
            <span>TRANSFORMATION WITH </span>
            <span className='stroke-text'>US HERE</span>
        </div>
        {/*Payment Plan Cards*/}
        <div className="plans">
            {plansData.map((plan,i) => (
                <div className="plan" key={i}>
                {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

                <div className="features">
                    {plan.features.map((features, i)=>
                    <div className="features">
                        <img src={whiteTick} alt="" />
                        <span key={i}>{features}</span>
                    </div>
                )}
                </div>
                <div><span>See further details -></span></div>
                <button className="btn">Join Now</button>

            </div>
            ))}
            
        </div>
     </div>
    
  )
}

export default Plans
