import React, { useRef } from 'react';
import './Membership.css'
import emailjs from '@emailjs/browser'
const Membership = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dahtml8', 'template_rq7ubfp', form.current, {
        publicKey: 'feEqzSifESePLzJKg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   <div className="Membership" id="Join-Us">
    <div className="left-m">
      <hr/>
      <div>
        <span className='stroke-text'>JOIN THE</span>
        <span>MOVEMENT,</span>
      </div>
      <div>
        <span>TRANSFORM YOUR</span>
        <span className='stroke-text'>FITNESS JOURNEY</span>
      </div>
    </div>
    <div className="right-m">
      <form ref={form} className="email-container" onSubmit={sendEmail}>
        <input type="email" name="user_email" placeholder='Enter your email address'/>
      <button className="btn btn-m">Join now</button>
      </form>
    </div>
   </div>
  )
}

export default Membership
