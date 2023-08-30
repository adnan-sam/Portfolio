import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/images/adnan-pic.png';
import HeaderSocials from './HeaderSocials';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
      <h2>Hello I'm</h2>
      <h1>Adnan Sameer</h1>
      <h2 className='text-light'>
      <TypeAnimation
          sequence={[
            'Web Developer',
            1000,
            'UI/UX Designer',
            1000
          ]}
          speed={50}
          repeat={Infinity}
      />
      </h2>
        {/* <h5>Hello I'm</h5>
        <h1>Adnan Sameer</h1>
        <h5 className='text-light'>Web Developer</h5> */}
        
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img className='me-img' src={ME} alt="Adnan's Image"/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header