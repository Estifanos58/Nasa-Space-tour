
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../../Components/Hero/Hero'
import {data} from '../../src/assets/data'
import im from '../../src/assets/BD 14 3065-b/1.jfif'
import './Tour.css'
import axios from 'axios'
const exoplanets = [
      {'name': 'BD 14 3065-b',
        'orbital_period': '4.3 days',
        'radius':'1.926 x Jupiter',
        'mass':'12.37 Jupiters',
        'descovery_year':'2024'

      },
      {'name':'HD 21520 b',
        'orbital_period':'25.1 days',
        'radius':'0.241 x Jupiter',
        'mass':'17.7 Earths',
        'descovery_year':'2024'
      },
      {
        'name':'HIP 67522 c_s',
        'radius':'0.891 x Jupiter',
        'orbital_period':'7 days',
        'mass':'0.225 Jupiters',
        'descovery_year':'2020'
      },
      {
        'name':'TOI-2379-b',
        'orbital_period':'5.5 days',
        'radius':'1.046 x Jupiter',
        'mass':'5.76 Jupiters',
        'descovery_year':'2024'
      },
      {
        'name':'TOI-2384-b',
        'orbital_period':'2.1 days',
        'radius':'1.025 x Jupiter',
        'mass':'1.966 Jupiters',
        'descovery_year':'2024'
      }
]
  
function Tour({name}) {
  const [count, setCount] = useState(0)
  const [apiValue, setApivalue] = useState([])
  const [isloading, setLoading] = useState(false)


  const {path} = useParams()
  let images=[] 
  let result = {}
  switch(path) {
    case 'BD 14 3065-b':
      images = data[0]
      result = exoplanets[0]
      console.log(images)
      break;
    case 'HD 21520 b':
      images = data[1]
      result = exoplanets[1]
      break
    case 'HIP 67522 c_s':
      images = data[2]
      result = exoplanets[2]
      break
    case 'TOI-2379-b':
      images = data[3]
      result = exoplanets[3]
      break
    case 'TOI-2384-b':
      images = data[4]
      result = exoplanets[4]
  }
  const img1 = images[0] 

  return (
   
    <div className='tour'>
      <Hero display={img1} />
      <div className='tour_content'>
        <h1>{result.name}</h1>
        <p>Discovered in {result.descovery_year}</p>
        <p>Has Radius of {result.radius}</p>
        <p>Has Orbital Period of {result.orbital_period}</p>
        <p>Has Mass of {result.mass}</p>

      </div>
        <div className="image-container">
          {
            images.map((im,i)=> 
              <div>
                  <img onClick={()=>setCount(count+1)} key={i} src={im} />
                  
                  {/* <input key={i} type="checkbox" onChange={handlecheck} checked={iseChecked} /> */}
              </div>
            
          )
          }
        </div>
       
        <></>
    </div>
  )
}

export default Tour