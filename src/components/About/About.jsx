import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpeg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>damnix.io</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresh Internship</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Locally</small>
            </article>
            <article className="about__card">
              <VscFolderActive className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed Built</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus obcaecati omnis tenetur debitis? Odio itaque nam velit distinctio a deserunt eius voluptates culpa at libero, repudiandae maiores deleniti rerum.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About