import { Landing } from '../Pages/Landing/Landing'
import  Form from '../Pages/Form/Form'
import {Route, Routes } from 'react-router-dom'
import sun from './assets/sun.jpg'
import React, { useState } from 'react'
import Tour from '../Pages/Tour/Tour'


function App() {
  const [input, setInput] = useState('')
  const [name, setName] = useState('')
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing  display={sun}/>}/>
        <Route path='/form' element={<Form input={input} setInput={setInput} name={name} setName={setName}/>}/>
        <Route path='/tour/:path' element={<Tour name={name}/>}/>
      </Routes>
    
    </>
  )
}

export default App
