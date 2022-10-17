import React from 'react'
import './Experiences.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Experiences = () => {
  return (
    <section id='experiences'>
      <h5>What skill I have</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>TailWind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backtend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>Solidity</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>TailWind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheck2Circle className='experience__details-icon'/>
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small> 
              </div>
            </article>
          </div>
        </div>
        

      </div>
    </section>
  )
}

export default Experiences