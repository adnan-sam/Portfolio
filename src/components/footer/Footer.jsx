import React from 'react';
import './footer.css';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Adnan Sameer</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href=''><FaFacebookF/></a>
        <a href='https://www.instagram.com/adnan_sam_/'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/adnan-sameer-199ba1223/'><FaLinkedinIn/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Adnan Sameer. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer