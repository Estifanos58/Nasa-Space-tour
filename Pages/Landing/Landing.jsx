import React, { useState } from 'react'
import { Nav } from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import { About } from '../../Components/About/About'
import './Landing.css'
import Hero from '../../Components/Hero/Hero'
import Picday from '../../Components/PicDay/Picday'
import Contact from '../../Components/Contact/Contact'
import { Link } from 'react-router-dom'

export const Landing = ({display}) => {
  

  return (
    <div>
      <Nav />
      <div style={{textAlign:'center', marginBottom:'-100px',marginTop:'100px'}}>
        <h1 style={{fontSize:'4rem', marginBottom:'20px'}}>Andromeda Space Tour</h1>
        <Link to='/form'><button style={{width:'300px', height:'60px', fontSize:'2.5rem', borderRadius:'30px', background:'transparent' , color:'white'}}>Book Now</button></Link>
      </div>
          {/* <Hero display={display}/> */}
          <Picday />
          <About/>
          <Contact/>
      <Footer />
    </div>
  )
}
