import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className='container services_container'>
            <article className='service'>
                <div className='service_head'>
                    <h3>UI/UX Design</h3>
                </div>
                <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Proficient in Figma and other design tools.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Crafting user-friendly and visually appealing designs.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Developing engaging prototypes using Figma.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Creating adaptable solutions for different devices.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p> Improving usability with effective designs.</p>
                    </li>
                </ul>
            </article>
            {/* END OF UI/UX */}
            <article className='service'>
                <div className='service_head'>
                    <h3>Web Development</h3>
                </div>
                <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Crafting intuitive, engaging user interfaces..</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Creating adaptable websites for all devices.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Developing engaging elements for user interaction.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Enhancing site speed and efficiency.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Ensuring consistency across various browsers.</p>
                    </li>
                </ul>
            </article>
            {/* END OF UI/UX */}
            <article className='service'>
                <div className='service_head'>
                    <h3>Content Creation</h3>
                </div>
                <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Capturing impactful and visually stunning photographs.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Creating cinematic and storytelling-focused videos.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Crafting narratives with impactful cinematography.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Enhancing content with imaginative editing techniques.</p>
                    </li>
                    <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Delivering versatile content for diverse platforms.</p>
                    </li>
                </ul>
            </article>
            {/* END OF UI/UX */}
        </div>
    </section>
  )
}

export default Services;
