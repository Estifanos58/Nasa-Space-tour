import React,{useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import rocket from '../../src/assets/rocket-removebg-preview.png'
import logo from '../../src/assets/logo-removebg-preview.png'
function Form({input, setInput, name, setName}) {
      const navigate = useNavigate()
  const rock = useRef()

  function handleClick () {
    rock.current.classList.toggle('lunch')
    setTimeout(() => {
      navigate(`/tour/${input}`)
    }, 1000);
    

  }
  console.log(input)
  return (
    <div className='form'>
      <div className="title">
          <img src={logo} alt="" />
      </div>
      <div className='form-container'>
        <h1>{`Ticket No : ${Math.floor(Math.random()*100000)} To ${input}`}</h1>
        <div className="form-title">
          <label htmlFor="name">Title :</label>
          <select name="" id="">
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Dr.">Dr.</option>
          </select>
        </div>
        <div className="form-fname">
          <label htmlFor="name">First Name :</label>
          <input type="text" onChange={(e)=>setName(e.target.value)} name="name" id="name" placeholder='Enter your First Name'/>
        </div>
        <div className="form-lname">
          <label htmlFor="name">Last Name :</label>
          <input type="text" name="name" id="name" placeholder='Enter your Last Name'/>
        </div>
        <div className="form-age">
          <label htmlFor="age">Age :</label>
          <input type="number" name="age" id="age" />
        </div>
        <div className="form-email">
          <label htmlFor="email">Email :</label>
          <input type="email" id='email' />
        </div>
        <div className="form-input">
          <h1>Where do you want to go</h1>
          <select onChange={(e)=>setInput(e.target.value)}  value={input}name="" id="">
            <option value=""></option>
            <option value="BD 14 3065-b">BD 14 3065-b</option>
            <option value="HD 21520 b">HD 21520 b</option>
            <option value="HIP 67522 c_s">HIP 67522 c_s</option>
            <option value="TOI-2379-b">TOI-2379-b</option>
            <option value="TOI-2384-b">TOI-2384-b</option>
          </select>
          <br />
          <button onClick={handleClick}>Send</button>
        </div>
        </div>
        <img ref={rock} className='rocket' src={rocket} alt="" />
    </div>
  )
}

export default Form