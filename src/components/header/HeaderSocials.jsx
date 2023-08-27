import React from 'react';
import {BsLinkedin, BsCodeSlash} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/adnan-sameer-199ba1223/' target='_blank'><BsLinkedin className='so_logo'/></a>
        <a href='https://github.com/adnan-sam' target='_blank'><FaGithub className='so_logo'/></a>
        <a href='https://leetcode.com/adnan_sam_/' target='_blank'><BsCodeSlash className='so_logo'/></a>
    </div>
  )
}

export default HeaderSocials