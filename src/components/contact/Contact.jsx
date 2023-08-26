import React, { useState } from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BiLogoTelegram} from 'react-icons/bi';
import {BsLinkedin} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import TICK from '../../assets/images/check-tick-icon-14141.png';

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [p_value, set_p_value] = useState('');
  const [success, setSuccess] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm('service_ww6qgbi', 'template_vyy01rq', form.current, 'FEQhZiwHmGgNPv_BL')
      .then((result) => {
          // console.log(result.text);
          // setShowPopup(true);
          setSuccess(true);
          set_p_value("Message successfully sent to Adnan Sameer");
          setIsLoading(false);

      }, (error) => {
          setSuccess(false);
          set_p_value("Message could not sent to Adnan Sameer");
          console.log(error.text);
          setIsLoading(false);
      });
      setTimeout(() => {
        set_p_value('');
      }, 6000);
      // setShowPopup(true);
      e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            {/* <h5>adnansameer400@gmail.com</h5> */}
            <a href='mailto:adnansameer400@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            {/* <h5>Adnan Sameer</h5> */}
            <a href='https://www.linkedin.com/in/adnan-sameer-199ba1223' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BiLogoTelegram className='contact_option-icon'/>
            <h4>Telegram</h4>
            {/* <h5>Adnan Sameer</h5> */}
            <a href='https://t.me/adnan_sam2001' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea> 
          <button type='submit' className={`btn btn-primary ${isLoading===true ? 'loading':''}`}>
            <span className="label">Send Message</span>
            <span className="spinner"></span>
          </button>
        </form>
        {/* Popup */}
        <p style={{ color: success === true ? '#32cd32' : '#c1b001', margin: 'auto' }}>{p_value}</p>
      </div>
    </section>
  )
}

export default Contact