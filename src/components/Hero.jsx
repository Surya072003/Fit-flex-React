import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>FITFUSION</h5>
        </span>
        <h2>When You Feel Like Quitting <b>Fitness</b> Remember Why You <b>Started</b> This Life Quest!</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero