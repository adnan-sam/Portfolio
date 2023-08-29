import React from 'react';
import './footer.css';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer>
      <a href='#' className='footer_logo'>Adnan Sameer</a>
      <ul className='permalinks'>
        <li><a className='link' href='#'>Home</a></li>
        <li><a className='link' href='#'>About</a></li>
        <li><a className='link' href='#'>Experience</a></li>
        <li><a className='link' href='#'>Services</a></li>
        <li><a className='link' href='#'>Portfolio</a></li>
        <li><a className='link' href='#'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href=''><FaFacebookF/></a>
        <a href='https://www.instagram.com/adnan_sam_/'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/adnan-sameer-199ba1223/'><FaLinkedinIn/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; {year} Adnan Sameer. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer