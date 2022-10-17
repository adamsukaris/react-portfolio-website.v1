import React from 'react'
import './Services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Create and design interactive user interface.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Be a full commited blockchain developer.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Animation Graphic User Card.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Your solution for clearing ideas.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>I will be 1% man in the world.</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Create and design the UI/UX.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Be a full commited blockchain developer.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Create DeFi Apps.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Be a patient developer.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>I will be 1% man in the world.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB3 Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Web3 Smart Contract</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Create and design the UI/UX.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Be a full commited blockchain developer.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Create DeFi Apps.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>Be a patient developer.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon"/>
              <p>I will be 1% man in the world.</p>
            </li>
          </ul>
        </article>
        {/*END OF Mobile Application*/}

      </div>
    </section>
  )
}

export default Services