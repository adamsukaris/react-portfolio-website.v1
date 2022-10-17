import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className=" container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>WatchMarket Web3 Dashboard</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adamsukaris" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>CoinFlowTracker Dashboard</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adamsukaris" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Cash RoadMap App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adamsukaris" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>MapLender App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adamsukaris" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>CoinVisual.web3</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adamsukaris" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>NetVieWorth.io</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/adamsukaris" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio