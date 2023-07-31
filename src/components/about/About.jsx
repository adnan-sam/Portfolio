import React from 'react';
import './about.css';
import ME from '../../assets/images/about-img.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='Adnan Sameer image' />
          </div>
        </div>

        <div className='about_content'>
          {/* <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Months</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div> */}

          <p>
          Hello, my name is Adnan Sameer, I'm currently pursuing Bachelor of Technology, majoring in Computer Science Engineering at Meghnad Saha Institute of Technology. I'm obsessed with making things and even more obsessed with making things better.
          In addition to my love of technology and design, I am also interested in Electronics, Robotics, Cinematography and Video Editing.
          When I'm not coding, you'll find me doing photography, gardening or working out in the park.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
  
        </div>
      </div>
    </section>
  )
}

export default About