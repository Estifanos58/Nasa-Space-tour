import React from 'react'
import Sun from '../../src/three'
import './Hero.css'

function Hero({display}) {
  return (
    <div className='hero'>
        <Sun display={display}/>
    </div>
  )
}

export default Hero